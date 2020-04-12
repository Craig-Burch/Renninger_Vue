<template>
  <div class="row">
    <card>
    <div style="background-color: white; padding:10px; border-radius: 5px; display: inline-block;">
    <div style="float:left" class="col-md-4"> 
      <div class="workcontainer" 
           style="display: flex; 
             height: 600px; 
             margin: auto; 
             border-radius: 10px; ">

        <div style="margin: auto;">
      
        <h1 style="color: #1e1e2f">US Anodize <br> Brand Identity</h1>
        <h4 style="color: #1e1e2f">While working as the Brand Manager at Industrial Metal Plating
          I was asked by the Company President to tackle a name
          change and rebrand that would better fit the nature of their
          company. The logo is a hexagon to represent the hexagonal
          Anodize pores in the aluminum processed in the US Anodize
          plant. The US Anodize color pallet, typography, and overall style
          references American culture and history to show the
          companies pride in their country.
        </h4>
      </strong>
        </div>
      </div>
    </div>
    <div class="col-md-8"> 
      
      <!-- <a href ="/img/PortfolioPages.jpg" target="blank"> -->
       <div style="float:left" @click="modal = true" class="workcontainer cursorOnHover">
         <img class="shadow" style="" src="/img/portfolio/usAnodizePH.jpg">
         <div class="overlay">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
       </div>
       <!-- </a> -->
      
    </div>
  </div>
    </card>
 
     <!-- modal -->
    <modal class="edit-modal" :show.sync="modal">
      <template slot="header">
        <h5 class="modal-title"><!-- US Anodize --></h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/usAnodize2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/usAnodize3.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/usAnodize4.jpg">
        </card>
        </div>
      </div>  
      <template slot="footer">
        <!-- footer -->
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
  .shadow {
  box-shadow: 0px 3px 15px rgba(0,0,0,5);
}
/*modal width desktop*/
.modal-dialog {
    max-width: 900px !important;
    margin-top: -400px !important;
    margin: 1.75rem auto;
}
</style>
