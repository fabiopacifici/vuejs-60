<template>

    <div class="banner">
      <img class="img-fluid" :src="'https://image.tmdb.org/t/p/original/' + element.backdrop_path" alt="">
      <div class="banner-text">
        <h1>{{ element.title }}</h1>
        <button href="" class="btn btn-outline-danger rounded-pill" @click="$emit('show-trailer', element.id)">
          Watch Trailer
          <font-awesome-icon icon="fa-solid fa-play-circle fa-fw"></font-awesome-icon>
        </button>
      </div>
      <div class="trailer" v-if="videoKey">
        <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${videoKey}?controls=0`"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>

    </div>

</template>

<script> 
export default {
  name: 'BannerComponent',
  props: {
    element: Object,
    videoKey: String 
  }
}

</script>

<style lang="scss" scoped>
  .banner {
    position: relative;

    .trailer {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }

    .banner-text {
      position: absolute;
      top: 50%;
      left: 2rem;
      transform: translateY(-50%);

      h1 {
        font-size: 4rem;
        color: white;
        text-shadow: 0 0 10px #545454;
      }
    }

    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
    }
  }

</style>