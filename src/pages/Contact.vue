<template>
  <!-- <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header mb-5">
          <h5 class="card-category">Renninger Design</h5>
          <h3 class="card-title">Contact Information</h3>
        </div>
        <div class="card-body">
          <div class="typography-line">
            <h2>
              <span>PHONE</span>
              <a href="tel:267-885-5347" target="blank">
               267-885-5347
              </a>
            </h2>
          </div>
          <div class="typography-line">
            <h2>
              <span>EMAIL</span>
              <a href="mailto:thatguysdesign@gmail.com">
                thatguysdesign@gmail.com 
              </a>
            </h2>
          </div>
          <div class="typography-line">
            <h2>
              <span>INSTAGRAM</span>
              <a href ="https://www.instagram.com/thatguysdesign" target="blank">
              https://www.instagram.com/thatguysdesign 
              </a>
            </h2>         
          </div>
          <div class="typography-line">
            <h2>
              <span>BEHANCE</span>
              <a href="https://www.behance.net/thatguysdesign" target="blank">
               https://www.behance.net/thatguysdesign 
              </a>
             </h2> 
          </div>
        </div>
      </div>
    </div>
  </div> -->
  
 <div class="contact">
  <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
   <div class="row">

    <div class="col-md-3">
      <div class="contact-info">
        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
        <h2>Contact Me</h2>
        <h4>Let's talk about your next project!</h4>
      </div>
    </div>
   
    <div class="col-md-9">
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
    padding: 4%;
   /* height: 400px;*/
  }
  .col-md-3{
    background: linear-gradient(to bottom, #ff9933 0%, #ec7203 99%);
    padding: 4%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .contact-info{
    margin-top:10%;
  }
  .contact-info img{
    margin-bottom: 10%;
  }
  .contact-info h2{
    margin-bottom: 10%;
  }
  .col-md-9{
    background: #fff;
    padding: 3%;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  .contact-form label{
    font-weight:600;
  }
  .contact-form button{
    background: #1e1e2f;
    color: #fff;
    font-weight: 600;
    /*width: 25%;*/
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
 .col-md-9 {
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
 }
 .col-md-3 {
   background: linear-gradient(to bottom, #ff9933 0%, #ec7203 99%);
   padding: 4%;
   border-top-left-radius: 0.5rem;
   border-top-right-radius: 0.5rem;
   border-bottom-left-radius: 0rem;
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
