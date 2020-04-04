<template>
  <div class="row">
    <div class="col-md-6"> 
      <card>
      <!-- <a href ="/img/PortfolioPages.jpg" target="blank"> -->

       <div @click="modal = true" class="workcontainer cursorOnHover">
         <img src="/img/portfolio/usAnodizePH.jpg">
         <div class="overlay">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
       </div>
       <!-- </a> -->
      </card>
    </div>
     <!-- employee modal -->
    <modal class="edit-modal" :show.sync="modal">
      <template slot="header">
        <h5 class="modal-title">Edit Employee QR Code Information</h5>
      </template>
       sss
        
          
      <template slot="footer">
        <!-- <base-button 
          type="secondary" 
          @click="modal = false"
          class="animation-on-hover" 
          >
            Close
        </base-button>
        <base-button 
          type="info" 
          v-model="info"
          @click="handleSubmit"
          class="animation-on-hover" 
         
          >
           Save changes
        </base-button> -->
        footer
      </template>
    </modal>
  </div>
  
</template>
<script>
  import NotificationTemplate from './Notifications/NotificationTemplate';
  import { Modal } from '@/components';
  import { BaseAlert } from '@/components';

  export default {
    components: {
      BaseAlert,
      Modal
    },
    data() {
      return {
        type: ["", "info", "success", "warning", "danger"],
        notifications: {
          topCenter: false
        },
        callToAction: 'View Project',
        modal: false,
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
      },
    //   editInfo(e) {
    //   const tr = e.target.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
    //   console.log(tr);
    //   this.infoModal = this.info[tr];
    //   console.log('unique array', this.infoModal);
    //   this.modal = true;
    // },
    }
  };
</script>
<style>
</style>
