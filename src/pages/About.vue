<template>
  <div class="container-fluid bg-1 text-center">
    <h1>A Man and A Dream.</h1>
    <img src="img/portrait2.png" alt="portrait">
    <h2>An artist eager to grow and give.</h2>
    <h3>I've recently Graduated from Antonelli Institute and I'm very excited to push forward to a future as a Graphic Designer. I want to bring a new feeling to design and how the world interacts with it. As a designer I have a lot of passion for beauty and functionality in modern society. My goal is to use the skills I've acquired as a Designer and Illustrator to create design fit for our surroundings..</h3>
     <h2>Services</h2>
  <div class="row">
    <div class="col-sm-4">
      <h3>Strategy</h3>
      <h3>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing experiences start.</h3>
    </div>
    <div class="col-sm-4">
      <h3>Graphic Design</h3>
      <h3>
      My goal is to provide functional work that will timelessly represent you. I strive to create perfect design that creates a sense of pride for your brand.
    </h3>
    </div>
    <div class="col-sm-4"> 
      <h3>Illustration</h3>
      <h3>My design reflects my background in Illustration, I supply an eye catching style that evokes one's imagination.</h3>
    </div>
  </div>
    <div class="col-md-12">
      <card>
        <div class="places-buttons d-flex justify-content-center">
          <div slot="footer" class="row button-container">
            <div class="col-lg-12 ml-auto mr-auto">
              <div class="row">
                <div class="col-sm-3">
                  <a href ="https://www.behance.net/thatguysdesign" target="blank">
                  <base-button size="lg" icon round class="btn-behance">
                    <i class="fab fa-behance fa-lg"></i>
                  </base-button>
                  </a>
                </div>
                <div class="col-sm-3">
                  <a href ="https://www.instagram.com/thatguysdesign" target="blank">
                  <base-button size="lg" icon round class="btn-instagram">
                    <i class="fab fa-instagram fa-lg"></i>
                  </base-button>
                  </a>
                </div>
                <div class="col-sm-3">
                  <a href="tel:+2678855347">
                   <base-button size="lg" icon round class="btn-phone">
                     <i class="fas fa-phone fa-lg"></i>
                   </base-button>
                  </a>
                </div>
                 <div class="col-sm-3"> 
                  <address>
                  <a href="mailto:thatguysdesign@gmail.com">
                   <base-button size="lg" icon round class="btn-envelope-open">
                     <i class="far fa-envelope-open fa-lg"></i>
                   </base-button>
                  </a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </card>
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
        type: ["", "info", "success", "warning", "danger"],
        notifications: {
          topCenter: false
        }
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
