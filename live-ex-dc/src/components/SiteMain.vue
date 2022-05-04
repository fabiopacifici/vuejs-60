<template>
  <main>
    <div class="products">
      <div class="container">
        <h1>Content goes here</h1>
      </div>
    </div>
    <Banner />
  </main>
</template>

<script>
import Banner from "@/components/BannerComponent.vue";
export default {
  name: "SiteMain",
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>

.products {
    height: 50vh;
    color: $dc-white;
    background: $dc-dark;
}
</style>