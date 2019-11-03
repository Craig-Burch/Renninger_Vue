<template>
 <div class="contact">
  <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
   <div class="row">

    <div class="col-md-12 contactHeader">
      <div class="contact-info contactformCOtext">
        <i class="tim-icons icon-email-85 icon"></i>
        <h2>Contact Me</h2>
        <h3>Let's talk about your next project!</h3>
      </div>
    </div>
   
    <div class="col-md-12 contactBody">
      <div class="contact-form">
        <div class="form-group">
          <label class="control-label" for="firstName">First Name:</label>
           <div class="">          
            <input 
              type="text" 
              class="form-control" 
              placeholder="Enter First Name.." 
              name="firstName"
              v-model="data.firstName">
           </div>
        </div>

        <div class="form-group">
          <label class="control-label " for="lastName">Last Name:</label>
          <div class="">          
            <input 
              type="text" 
              class="form-control" 
              placeholder="Enter Last Name.." 
              name="lastName"
              v-model="data.lastName">
          </div>
        </div>

        <div class="form-group">
          <label class="control-label" for="email">Email:</label>
          <div class="">
           <input 
             type="email" 
             class="form-control" 
             placeholder="Enter email.." 
             name="email"
             v-model="data.email">
          </div>
        </div>

        <div class="form-group">
          <label class="control-label" for="comment">Comment:</label>
          <div class="">
           <input 
             class="form-control" 
             rows="5" 
             name="comment" 
             placeholder="Let me know what you would like me to create.." 
             v-model="data.comment">
          </div>
        </div>

        <div class="form-group">        
          <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>

      </div>
    </div>
   </div>
 </form>
</div>
</template>
<script>
import axios from "axios";
export default {
  data () {
    return {
      data: []
    };
  },
  methods: {
     handleSubmit () {
      let formValues = [];
        const inputs = document.querySelectorAll(".contact input ");
          for (let input of inputs) {
            let name = input.name;
            let value = input.value;
            formValues.push({ [name]: value });
          }
          formValues = Object.assign({}, ...formValues);
          this.data = formValues;
          if (formValues.firstName === "") {
            alert('First Name is Required. Please fix.');
          } else if (formValues.lastName === "") {
              alert('Last Name is Required. Please fix.');
          } else if (formValues.email === "") {
              alert('Email is Required. Please fix.');
          } else if (formValues.comment === "") {
              alert('Please tell me about your project in the comment section. Thank you.');
          }
          else {
            axios 
            .post("http://renningercontact-env.ekpnqjzzbt.us-east-1.elasticbeanstalk.com/mailer", formValues)
            .then(response => {       
              console.log(response);     
            })
            .catch(error => {
              console.log(error);
            });
            alert("Thank you, I will contact you as soon as possible! Have a wonderful day!");
            this.$router.push('/')
          } 
      }
   }
}
</script>
<style scoped> 

  a {
    color:white;
  }
   a:hover {
    color:white;
    transition: .5s ease;
    color: #EC7203;
  }
  .contact{
    padding-top: .2%;
    padding-right: 1.5%;
    padding-left: 1.5%;
  }
  .contactHeader {
    background: linear-gradient(to bottom, #ec7203 0%, #ff9933 99%);
    padding: 2.7%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .contact-info{
    margin-top:3%;

  }
  .contactformCOtext h2 {
    color: #1F1E30 !important;
  }
  .contactformCOtext h3 {
    color: #1F1E30 !important;
  }
  .contactformCOtext img {
    color: #1F1E30 !important;
  }
  .icon {
    font-size: 5em;
    margin-bottom: 2.5%;
  }
  .contact-info h2{
    margin-bottom: 3%;
  }
  .contactBody{
    background: #fff;
    padding: 2%;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  .contact-form label{
    font-weight:600;
  }
  .contact-form button{
    background: #1e1e2f;
    color: #fff;
    font-weight: 600;
  }
  .contact-form button:focus{
    box-shadow:none;
  }
  .form-control {
    color: black !important;
  }
  .form-control:focus {
    border-color: #ff9933 !important;
  }
@media only screen and (max-width:767px) {
 .contact{
    padding-left: 3%;
    padding-right: 3%;
  }
  .contactHeader {
    padding: 5%;
  }
  .contactBody {
    padding: 5%;
  }
  .contact-info {
    margin-top:5%;
  }
  .contact-info img {
    margin-bottom: 5%;
  }
  .contact-info h2 {
    margin-bottom: 5%;
  }
}

</style>
