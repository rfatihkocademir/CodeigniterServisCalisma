<template>
  <div class="container">
    <h1 class="text-center mt-5 text-info">Vue.JS Codeigniter Servis Bağlantısı</h1>
    <transition name="page" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>


<script>


  export default {

    created() {
      this.$store.dispatch("initApp")
    }
  }
</script>
<style>
  html{
    height: 100% !important;
  }
  body {
    background: #002436;
  }
  .page-enter ,.page-leave-active{
    opacity: 0;
    transform: scale(0);
  }
  .page-enter-active,.page-leave-active{
    transition: all .5s;

  }
</style>
