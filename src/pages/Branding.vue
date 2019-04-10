<template>
   <div class="row">
    <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio2.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
     <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio3.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio4.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
      <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio5.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio6.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
    <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio7.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio8.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
     <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio21.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio22.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
      <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio11.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio12.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>

    <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio13.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio14.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
     <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio15.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio16.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
      <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio17.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio18.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>

    <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio19.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio20.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
     <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio23.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio24.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>
      <div class="col-md-4">
       <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="/img/LogoFolio/LogoFolio9.jpg" alt="Avatar">
           </div>
           <div class="flip-card-back">
             <img src="/img/LogoFolio/LogoFolio10.jpg" alt="Avatar">
           </div>
         </div>
       </div>
    </div>

   

   </div>




     





</template>
<script>
  import NotificationTemplate from './Notifications/NotificationTemplate';
  import { BaseAlert } from '@/components';

  export default {
    components: {
      BaseAlert
    },
    data() {
      return {
      };
    },
    methods: {
      notifyVue(verticalAlign, horizontalAlign) {
        const color = Math.floor(Math.random() * 4 + 1);
        this.$notify({
          component: NotificationTemplate,
          icon: "tim-icons icon-bell-55",
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[color],
          timeout: 0
        });
      }
    }
  };
</script>
<style>
  
</style>
