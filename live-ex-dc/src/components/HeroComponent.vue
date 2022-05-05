<template>
      <div class="hero"></div>
</template>

<script>
export default {
    name: "HeroComponent"
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("@/assets/img/jumbotron.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}
</style>