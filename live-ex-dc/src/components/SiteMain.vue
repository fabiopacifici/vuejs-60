<template>
  <main>

    <Hero />
    <!-- /.hero -->
    <ComicsList />

    <Banner />
  </main>
</template>

<script>
import Hero from "@/components/HeroComponent.vue";
import Banner from "@/components/BannerComponent.vue";
import ComicsList from "@/components/ComicsList.vue";



export default {
  name: "SiteMain",
  components: {
    Hero,
    ComicsList,
    Banner,
  },
  };
</script>

<style lang="scss" scoped>

</style>