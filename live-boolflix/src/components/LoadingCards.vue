<template>
  <div class="container-fluid p-4 placeholders">
    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
      <div class="item" v-for="card in 20" :key="card">
        <div class="card">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingCards'
}
</script>

<style lang="scss" scoped>

  .placeholders {
    .card {
      background-color: gainsboro;
      height: 200px;
      animation: pulse 1.5s infinite;
    }
  }
</style>