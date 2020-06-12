<template>
  <div>
    <!-- item 1 -->
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
        <h3 style="color: #1e1e2f">While working as the Brand Manager at Industrial Metal Plating
          I was asked by the Company President to tackle a name
          change and rebrand that would better fit the nature of their
          company. The logo is a hexagon to represent the hexagonal
          Anodize pores in the aluminum processed in the US Anodize
          plant. The US Anodize color pallet, typography, and overall style
          references American culture and history to show the
          companies pride in their country.
        </h3>
      </strong>
        </div>
      </div>
    </div>
    <div class="col-md-8"> 
       <div style="float:left" @click="modal = true" class="workcontainer cursorOnHover">
         <img class="shadow" style="" src="/img/portfolio/1400w/usAnon1.jpg">
         <div class="overlay">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
       </div>    
    </div>
   </div>
  </card>
  </div>
 
     <!-- modal 1 -->
    <modal class="edit-modal anodizeModal" :show.sync="modal">
      <template slot="header">
        <h5 class="modal-title">US Anodize </h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/usAnon1.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/usAnon2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/usAnon3.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/usAnon4.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/usAnon5.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/usAnon6.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/usAnon7.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/usAnon8.jpg">
        </card>
        </div>
      </div>
      <template slot="footer">
        <!-- footer -->
      </template>
    </modal>

    <!-- item 2 -->
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
      
        <h1 style="color: #1e1e2f">IMP <br> Brand Identity</h1>
        <h3 style="color: #1e1e2f">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </h3>
      </strong>
        </div>
      </div>
    </div>
    <div class="col-md-8"> 
       <div style="float:left" @click="modal2 = true" class="workcontainer cursorOnHover">
         <img class="shadow" style="" src="/img/portfolio/1400w/imp1.jpg">
         <div class="overlay2">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
       </div>    
    </div>
   </div>
  </card>
  </div>
 
     <!-- modal 2 -->
    <modal class="edit-modal impModal" :show.sync="modal2">
      <template slot="header">
        <h5 class="modal-title">Imp</h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp3.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp4.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp5.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp6.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp15.jpg">
        </card>
        </div>
      </div> 
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp7.jpg">
        </card>
        </div>
      </div>   
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp8.jpg">
        </card>
        </div>
      </div> 
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp9.jpg">
        </card>
        </div>
      </div>      
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp14.jpg">
        </card>
        </div>
      </div> 
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp11.jpg">
        </card>
        </div>
      </div> 
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp10.jpg">
        </card>
        </div>
      </div>       
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp12.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/imp13.jpg">
        </card>
        </div>
      </div>  
       
      <template slot="footer">
        <!-- footer -->
      </template>
    </modal>


      <!-- item 3 -->
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
      
        <h1 style="color: #1e1e2f">Seraphic <br> Brand Identity</h1>
        <h3 style="color: #1e1e2f">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </h3>
      </strong>
        </div>
      </div>
    </div>
    <div class="col-md-8"> 
       <div style="float:left" @click="modal3 = true" class="workcontainer cursorOnHover">
         <img class="shadow" style="" src="/img/portfolio/1400w/seraphic1.jpg">
         <div class="overlay3">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
       </div>    
    </div>
   </div>
  </card>
  </div>
 
     <!-- modal 3 -->
    <modal class="edit-modal seraphicModal" :show.sync="modal3">
      <template slot="header">
        <h5 class="modal-title">Seraphic</h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/seraphic1.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/seraphic2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/seraphic3.jpg">
        </card>
        </div>
      </div>    
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/seraphic4.jpg">
        </card>
        </div>
      </div>
      <template slot="footer">
        <!-- footer -->
      </template>
    </modal>




       <!-- item 4 -->
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
      
        <h1 style="color: #1e1e2f">Watson Maack <br> Brand Identity</h1>
        <h3 style="color: #1e1e2f">Watson Maack is the son of the owner of US Anodize, formerly Industrial Metal Plating. While he was planning a show in the area I was asked to take a crack at redesigning his personal brand and planning the merchandise and overall feel of his show. The Watson Maack graphics are references to his musical style and overall vibe. In the end I created multiple shirt designs that were sent to print, a backdrop for the stage, table cards, fliers, posters, VIP tags and lanyards, as well as a Limited Edition shirt design that was hand pressed by myself. This shirt was white and included a unique fluid graphic that referenced the street wear trend of the time. Check out Watson Maack on Spotify!
        </h3>
      </strong>
        </div>
      </div>
    </div>
    <div class="col-md-8"> 
       <div style="float:left" @click="modal4 = true" class="workcontainer cursorOnHover">
         <img class="shadow" style="" src="/img/portfolio/1400w/wm1.jpg">
         <div class="overlay2">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
       </div>    
    </div>
   </div>
  </card>
  </div>
 
     <!-- modal 3 -->
    <modal class="edit-modal wmModal" :show.sync="modal4">
      <template slot="header">
        <h5 class="modal-title">Watson Maack</h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/wm2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/wm3.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/wm4.jpg">
        </card>
        </div>
      </div>    
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/wm5.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/wm6.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/wm7.jpg">
        </card>
        </div>
      </div>
      <template slot="footer">
        <!-- footer -->
      </template>
    </modal>


       <!-- item 5 -->
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
      
        <h1 style="color: #1e1e2f">The Dog House <br> Brand Identity</h1>
        <h3 style="color: #1e1e2f">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </h3>
      </strong>
        </div>
      </div>
    </div>
    <div class="col-md-8"> 
       <div style="float:left" @click="modal5 = true" class="workcontainer cursorOnHover">
         <img class="shadow" style="" src="/img/portfolio/1400w/dh1.jpg">
         <div class="overlay3">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
       </div>    
    </div>
   </div>
  </card>
  </div>
 
     <!-- modal 5 -->
    <modal class="edit-modal wmModal" :show.sync="modal5">
      <template slot="header">
        <h5 class="modal-title">The Dog House</h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/dh2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow" style="" src="/img/portfolio/1400w/dh3.jpg">
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
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
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

  min-width: 70%;
}

.modal {

}

.modal-dialog-centered {

}
.anodizeModal {
 margin-top: -94.1% !important
}
.impModal {
 margin-top: -166% !important
}
.seraphicModal {
  margin-top: -46.2% !important
}
.wmModal {
  margin-top: -22.5% !important
}

</style>
