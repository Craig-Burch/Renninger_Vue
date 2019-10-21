<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="http://renninger.design/#/branding">
            Renninger Design
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://renninger.design/#/contact">
            Contact
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://renninger.design/#/about">
            About
          </a>
        </li>
      </ul>
      <div class="copyright">
        © {{year}} made with<span class ="icon-semblance"> <i class="tim-icons icon-heart-2"></i></span> by
        <a href="http://semblancestudios.com/" target="_blank" rel="noopener">Craig Burch</a>@
        <a href="http://semblancestudios.com/" target="_blank" rel="noopener">Semblance Studios</a> for a better web.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
   .icon-semblance i {
    color: #ec7203 !important;
    padding-left: 2px;
  }
</style>
