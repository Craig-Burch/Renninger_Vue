<template>
  <div class="container-fluid bg-1 text-center">
    <h1>A Man and a Dream.</h1>
    <img class="portrait" src="img/portrait2.png" alt="portrait">
    <h2 style="margin-top: 2%;">A Creator of Functional Art</h2>
    <h3>I strive to bring a new feeling to design and how it interacts with people. As a designer I have a lot of passion for beauty and functionality in modern society. My goal is to use the skills I've acquired as a Designer and Illustrator to create work that fits in to our surroundings. Allow me to provide you with work that is not only visually appealing but also functional and one of a kind. When I work with a client my goal is new, fresh, and effective design.</h3> 
    <hr>
  <h1 style ="margin-top: 2%;">Services</h1>
  <div class="row">
    <div class="col-sm-4">
      <h3>Graphic Design</h3>
      <img src ="img/aboutme-img/graphicdesignex.jpg">
      <h3 style ="margin-top: 4.5%;">
      My goal is to provide functional work that will timelessly represent you. I strive to create perfect design that creates a sense of pride for your brand.</h3>
    </div>
    <div class="col-sm-4">
      <h3>Branding</h3>
      <img src ="img/aboutme-img/brandingex.jpg">
      <h3 style ="margin-top: 4.5%;">I help clients construct and maintain a solid brand strategy to help improve their appearance and give their company a more professional feel.</h3>
    </div>
    <div class="col-sm-4"> 
      <h3>Illustration</h3>
       <img style ="" src ="img/aboutme-img/illex.jpg">
      <h3 style ="margin-top: 4.5%;">My design reflects my background in Illustration, I supply an eye catching style that evokes one's imagination.</h3>
    </div>
  </div>
 </div>
</template>
<script>
  // import NotificationTemplate from './Notifications/NotificationTemplate';
  import { BaseAlert } from '@/components';

  export default {
    components: {
      BaseAlert
    },
    data() {
      return {
        type: ["", "info", "success", "warning", "danger"],
        notifications: {
          topCenter: false
        }
      };
    },
    methods: {
      // notifyVue(verticalAlign, horizontalAlign) {
      //   const color = Math.floor(Math.random() * 4 + 1);
      //   this.$notify({
      //     component: NotificationTemplate,
      //     icon: "tim-icons icon-bell-55",
      //     horizontalAlign: horizontalAlign,
      //     verticalAlign: verticalAlign,
      //     type: this.type[color],
      //     timeout: 0
      //   });
      // }
    }
  };
</script>
<style>
.portrait {
  height:350px;
  width:340px;
}
@media screen and (max-width: 425px) {
.portrait {
  height:275px;
  width:265px;
  }
}
</style>
