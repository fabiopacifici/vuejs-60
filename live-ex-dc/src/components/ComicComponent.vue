<template>
  <div class="col-2">
    <div class="comic">
      <img :src="comic.thumb" />
      <h4>{{comic.series}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicComponent",
  props: {
    comic: Object,
  },
};
</script>

<style lang="scss" scoped>
.comic {
    text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: top;
  }
}
</style>