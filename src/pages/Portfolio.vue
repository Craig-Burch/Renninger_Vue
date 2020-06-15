<template>
  <div>
    <!-- Watson -->
    <div class="row">
      <card>
        <div style="background-color: white; padding:10px; border-radius: 5px; display: inline-block;">
         <div class="portColumns"> 
           <div class="workcontainer centerRowItems" >
            <div style="margin: auto;">
              <h1 style="color: #1e1e2f">Watson Maack <br> Brand Identity</h1>
              <img  @click="modalWatson = true" class="shadow mainImages mobilePortImages" src="/img/portfolio/1400w/wm1.jpg">
              <h3 style="color: #1e1e2f">While Watson Maack was planning a show in my area I was asked to take a crack at redesigning his personal brand and planning the merchandise and overall feel of his show. The Watson Maack graphics are references to his musical style and overall vibe. In the end, I created multiple shirt designs that were sent to print, a backdrop for the stage, table cards, fliers, posters, VIP tags and lanyards, as well as a Limited Edition shirt design that was hand pressed by myself. This shirt was white and included a unique fluid graphic that referenced the street wear trend of the time. Check out Watson Maack on Spotify!
              </h3>             
            </div>
           </div>
         </div>
          <div class="portColumns"> 
             <div @click="modalWatson = true" class="workcontainer cursorOnHover centerRowItems">
               <div style="margin: auto;">
                <img class="shadow mainImages desktopPortImages" src="/img/portfolio/1400w/wm1.jpg">
                <div class="overlay2">
                 <div class="text">        
                   {{callToAction}}         
                 </div>
                </div>
               </div>
             </div>    
          </div>
         </div>
      </card>
    </div>
     <!-- modalWatson modal -->
    <modal class="edit-modal wmModal" :show.sync="modalWatson">
      <template slot="header">
        <h5 class="modal-title">Watson Maack</h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm4.jpg">
        </card>
        </div>
      </div> 
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm1.jpg">
        </card>
        </div>
      </div> 
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm3.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm2.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm5.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm6.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm7.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm8.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/wm9.jpg">
        </card>
        </div>
      </div>
      <template slot="footer">
        <!-- footer -->
      </template>
    </modal>
  
       <!-- Seraphic -->
    <div class="row">
     <card>
      <div style="background-color: white; padding:10px; border-radius: 5px; display: inline-block;">

        <div class="portColumns"> 
          <div class="workcontainer centerRowItems" >
            <div style="margin: auto;">
              <h1 style="color: #1e1e2f">Seraphic <br> Brand Identity</h1>
              <img  @click="modalSeraphic = true" class="shadow mainImages mobilePortImages" src="/img/portfolio/1400w/seraphic1.jpg">
              <h3 style="color: #1e1e2f">Seraphic, originally Seraphic Wood and Steel, is the name held by two skilled craftsman and their apprentices. My task was to take their brand which already had a tight-knit following and give them a face that could inspire customers just as their work does. My first challenge was to find a way to represent the many crafts and oddities Seraphic encompasses. I decided the best course of action would be to present each category with a separate, recognizable icon that could be drawn back to the main logo. This resulted in multiple sections of Seraphic.
             </h3>   
            </div>
          </div>
       </div>
       <div class="portColumns"> 
        <div @click="modalSeraphic = true" class="workcontainer cursorOnHover centerRowItems">
        <div style="margin: auto;">
          <img class="shadow mainImages desktopPortImages" src="/img/portfolio/1400w/seraphic1.jpg">
           <div class="overlay3">
            <div class="text">        
             {{callToAction}}         
            </div>
          </div>
        </div>  
       </div>  
      </div>
     </div>
    </card>
   </div>
     <!-- Seraphic modal  -->
    <modal class="edit-modal seraphicModal" :show.sync="modalSeraphic">
      <template slot="header">
        <h5 class="modal-title">Seraphic</h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/seraphic1.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/seraphic2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/seraphic3.jpg">
        </card>
        </div>
      </div>    
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/seraphic4.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/seraphic5.jpg">
        </card>
        </div>
      </div>
      <template slot="footer">
        <!-- footer -->
      </template>
    </modal>
 
    <!-- IMP -->
    <div class="row">
    <card>
    <div style="background-color: white; padding:10px; border-radius: 5px; display: inline-block;">
      <div class="portColumns"> 
        <div class="workcontainer centerRowItems" >
          <div style="margin: auto;">
           <h1 style="color: #1e1e2f">IMP <br> Brand Identity</h1>
           <img  @click="modalIMP = true" class="shadow mainImages mobilePortImages" src="/img/portfolio/1400w/imp1.jpg">
           <h3 style="color: #1e1e2f">Industrial Metal Plating has given me my foot in the door into my design career. Starting out as a design intern, controlling printers and heat pressing parts, I slowly worked my way to the Brand Manager position. As the Brand Manager I control all items that involve the graphics and branding of IMP. This involved developing a more eye catching brand identity as well as print media, new brand guidelines, royalty free camouflages, Infographics, truck wraps, and much more.
           </h3>
         </div>
       </div>
     </div>
     <div class="portColumns"> 
       <div @click="modalIMP = true" class="workcontainer cursorOnHover centerRowItems">
        <div style="margin: auto;">
         <img class="shadow mainImages desktopPortImages" src="/img/portfolio/1400w/imp1.jpg">
         <div class="overlay2">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
        </div>    
      </div>
     </div>
    </div>
   </card>
  </div>
     <!-- impModal -->
    <modal class="edit-modal impModal" :show.sync="modalIMP">
      <template slot="header">
        <h5 class="modal-title">Imp</h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp1.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp15.jpg">
        </card>
        </div>
      </div> 
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp5.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp7.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp9.jpg">
        </card>
        </div>
      </div> 
        <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp8.jpg">
        </card>
        </div>
      </div> 
       <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp10.jpg">
        </card>
        </div>
      </div>   
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages"  style="" src="/img/portfolio/1400w/imp3.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages"  style="" src="/img/portfolio/1400w/imp4.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp11.jpg">
        </card>
        </div>
      </div> 
       <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp6.jpg">
        </card>
        </div>
      </div> 
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp12.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp13.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/imp14.jpg">
        </card>
        </div>
      </div> 
       
      <template slot="footer">
        <!-- footer -->
      </template>
    </modal>

       <!-- Dog House -->
    <div class="row">
     <card>
      <div style="background-color: white; padding:10px; border-radius: 5px; display: inline-block;">
       <div class="portColumns"> 
         <div class="workcontainer centerRowItems" >
           <div style="margin: auto;">
             <h1 style="color: #1e1e2f">The Dog House <br> Brand Identity</h1>
             <img  @click="modalDogHouse = true" class="shadow mainImages mobilePortImages" src="/img/portfolio/1400w/dh1.jpg">
             <h3 style="color: #1e1e2f">The Dog House Branding holds a spot near and dear to my heart. Not only is The Dog House a business started by my mother, Dee Ann Renninger, but it is also the first project That allowed my good friend Craig and I to combine our crafts and develop a beautiful brand package. Craig Burch (ilovecode.tech) is responsible for the web development of doghousepa.com. The logo is a reference to The Dog House's first location, a very small almost shack-like salon that once housed a small barber shop. I used very friendly type and colors to reference their very personal business. Dogs normally don't like their groomers but The Dog House offers an exception to that. 
            </h3>
         </div>
        </div>
      </div>
      <div class="portColumns"> 
       <div @click="modalDogHouse = true" class="workcontainer cursorOnHover centerRowItems">
        <div style="margin: auto;">
         <img class="shadow mainImages desktopPortImages" src="/img/portfolio/1400w/dh1.jpg">
         <div class="overlay3">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
       </div>    
     </div>
    </div>
   </div>
  </card>
  </div>
     <!-- Dog House modal  -->
    <modal class="edit-modal dhModal" :show.sync="modalDogHouse">
      <template slot="header">
        <h5 class="modal-title">The Dog House</h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/dh1.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/dh2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/dh3.jpg">
        </card>
        </div>
      </div>    
      <template slot="footer">
        <!-- footer -->
      </template>
    </modal>

     <!-- Anodize -->
   <div class="row">
    <card>
     <div style="background-color: white; padding:10px; border-radius: 5px; display: inline-block;">
      <div class="portColumns"> 
       <div class="workcontainer centerRowItems" >
        <div style="margin: auto;">
          <h1 style="color: #1e1e2f">US Anodize <br> Brand Identity</h1>
          <img  @click="modalAnodize = true" class="shadow mainImages mobilePortImages" src="/img/portfolio/1400w/usAnon1.jpg">
          <h3 style="color: #1e1e2f">While working as the Brand Manager at Industrial Metal Plating
           I was asked by the Company President to tackle a name
           change and rebrand that would better fit the nature of their
           company. The logo is a hexagon to represent the hexagonal
           Anodize pores in the aluminum processed in the US Anodize
           plant. The US Anodize color pallet, typography, and overall style
           references American culture and history to show the
           companies pride in their country.
          </h3>
        </div>
      </div>
    </div>
    <div class="portColumns"> 
      <div @click="modalAnodize = true" class="workcontainer cursorOnHover centerRowItems">
        <div style="margin: auto;">
         <img class="shadow desktopPortImages"  src="/img/portfolio/1400w/usAnon1.jpg">
         <div class="overlay2">
           <div class="text">        
             {{callToAction}}         
           </div>
         </div>
        </div>
       </div>    
     </div>
    </div>
   </card>
  </div>
     <!-- Anodize modal  -->
    <modal class="edit-modal anodizeModal" :show.sync="modalAnodize">
      <template slot="header">
        <h5 class="modal-title">US Anodize </h5>
      </template>
      <!-- body -->
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/usAnon1.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages"  style="" src="/img/portfolio/1400w/usAnon2.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/usAnon3.jpg">
        </card>
        </div>
      </div>  
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/usAnon4.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/usAnon5.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/usAnon6.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/usAnon7.jpg">
        </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"> 
        <card>
          <img class="shadow modalsImages" style="" src="/img/portfolio/1400w/usAnon8.jpg">
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
        modalAnodize: false,
        modalIMP: false,
        modalSeraphic: false,
        modalWatson: false,
        modalDogHouse: false,
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
    }
  };
</script>
<style>
.portColumns {
  padding: 40px;
  float: left;
   width: 50%;  
}
@media only screen and (max-width: 1600px)  {
  .portColumns {
   width: 100%; 
   padding: 10px; 
  }
}
@media only screen and (min-width: 1921px) and (max-width: 4000px)  {
  .centerRowItems {
    display: flex; 
    height: 600px; 
    margin: auto; 
    border-radius: 10px;
  }
}
@media only screen and (min-width: 1601px) and (max-width: 1920px)  {
  .centerRowItems {
    display: flex; 
    height: 550px; 
    margin: auto; 
    border-radius: 10px;
  }
}
/*@media only screen and (min-width: 1401px) and (max-width: 1600px)  {
  .centerRowItems {
    display: flex; 
    height: 325px; 
    margin: auto; 
    border-radius: 10px;
  }
  img.mainImages {
    height: 300px
  }
}
@media only screen and (min-width: 1400px) and (max-width: 1200px)  {
  .centerRowItems {
    display: flex; 
    height: 400px; 
    margin: auto; 
    border-radius: 10px;
  }
  img.mainImages {
    height: 300px
  }
}*/
/*@media only screen and (min-width: 989px) and (max-width: 1199px)  {
  .centerRowItems {
    height: 900px; 
  }
}
*/
img.shadow.mainImages.mobilePortImages {
    margin-bottom: 20px !important;
  }
@media only screen and (min-width: 1600px)  {
  .mobilePortImages {
    display: none;   
  }
}
@media only screen and (max-width: 1600px)  {
  .desktopPortImages {
    display: none;
  }
}

.shadow {
  box-shadow: 0px 3px 15px rgba(0,0,0,5);
}

img.modalsImages  {

}
/*modal width desktop*/
@media only screen and (min-width: 2000px) and (max-width: 4000px)  {

  .modal-dialog {
     min-width: 50%;
  }
  .anodizeModal {
    margin-top: -67.8% !important
  }
  .impModal {
    margin-top: -127.9% !important
  }
  .seraphicModal {
    margin-top: -41.8% !important
  }
  .wmModal {
    margin-top: -76.3% !important
  }
  .dhModal {
    margin-top: -24.5% !important
  }

}
@media only screen and  (max-width: 1999px)  {

  .modal-dialog {
     min-width: 70%;
  }
  .anodizeModal {
    margin-top: -94.1% !important
  }
  .impModal {
    margin-top: -177.8% !important
  }
  .seraphicModal {
    margin-top: -58.2% !important
  }
  .wmModal {
    margin-top: -106.2% !important
  }
  .dhModal {
    margin-top: -34.5% !important
  }

}
@media only screen and  (max-width: 600px)  {

  .modal-dialog {
     min-width: 70%;
  }
  .anodizeModal {
    margin-top: -109.1% !important
  }
  .impModal {
    margin-top: -214% !important
  }
  .seraphicModal {
    margin-top: -100.2% !important
  }
  .wmModal {
    margin-top: -125.2% !important
  }
  .dhModal {
    margin-top: -357.5% !important
  }

}
@media only screen and  (max-width: 480px)  {

  .seraphicModal {
    margin-top: -60.2% !important
  }
  .dhModal {
    margin-top: -24.5% !important
  }

}
@media only screen and  (max-width: 375px)  {

  .seraphicModal {
    margin-top: -60.2% !important
  }
  .dhModal {
    margin-top: -90.5% !important
  }

}


.modal {

}

.modal-dialog-centered {

}

</style>
