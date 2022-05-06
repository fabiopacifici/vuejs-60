<template>
  <div id="app">

    <SiteHeader></SiteHeader>
    <SiteMain></SiteMain>
    
   
    <footer></footer>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteMain from "@/components/SiteMain.vue";

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
