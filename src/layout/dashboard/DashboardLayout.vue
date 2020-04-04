<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/branding" :name="$t('branding')" icon="tim-icons icon-badge"/>
        <sidebar-link to="/portfolio" :name="$t('Portfolio')" icon="tim-icons icon-image-02"/>
        <sidebar-link to="/about" :name="$t('about me')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/contact" :name="$t('contact')" icon="tim-icons icon-chat-33"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style>
  .wrapper {
    color: black !important;
  }
</style>
