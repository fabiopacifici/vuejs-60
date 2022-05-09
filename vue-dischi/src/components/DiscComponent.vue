<template>
  <div class="col">
    <div class="disc">
      <img class="img-fluid" :src="disc.poster" :alt="disc.title">
      <div class="disc_text">
        <h4>{{ disc.title }}</h4>
        <div class="author">{{ disc.author }}</div>
        <div class="year">{{ disc.year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscComponent',
  props: {
    disc: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.disc {
  background-color: $spotify-dark-light;
  padding: 1rem;
  text-align: center;
  min-height: 400px;
  img {
    aspect-ratio: 1 / 1;
  }
  .disc_text {
    padding: 1rem;

    h4 {
      text-align: center;
      font-size: 1.1rem;
      text-transform: uppercase;
    }

    div {
      color: $spotify-light;
    }
  }

}
</style>