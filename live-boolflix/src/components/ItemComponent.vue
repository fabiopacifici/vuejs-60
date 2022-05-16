<template>
  <div class="item bg-transparent position-relative" @click="$emit('showModal')">
    <img class="img-fluid" :src="generateImageUrl(element.poster_path)" alt="">
    <div class="card-text tex-white d-none px-2 position-absolute top-0">
      <h3>
        {{ itemKey == 'movies' ? element.title : element.name }}
      </h3>
      <h4>
        {{ itemKey == 'movies' ? element.original_title : element.original_name }}
      </h4>
      <!-- Add vote as star with Fontawesome -->
      <div class="rating">
        <font-awesome-icon icon="fa-solid fa-star" v-for="vote in getVote(element.vote_average)" :key="vote + 'full'" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="vote in 5 - getVote(element.vote_average)"
          :key="vote + 'empty'" />
      </div>

      <!-- Add vote as stars With Bootstrap
                    <div class="rating">
                      <span class="star-fill" v-for="vote in getVote(element.vote_average)" :key="vote + 'full'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                      <span class="star-empty" v-for="vote in 5 - getVote(element.vote_average)" :key="vote + 'empty'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
                          viewBox="0 0 16 16">
                          <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </span>
                    </div>-->

      <!-- lang flag -->
      <lang-flag :iso="element.original_language" v-if="selectedFlags(element.original_language)" />
      <div v-else>
        {{ element.original_language }}
      </div>
      <!-- Genres -->
      <div class="genres" v-if="genres">
        <h4>Genres: </h4>
        <div class="genre" v-for="genre in genres" :key="genre.id">
          {{ genre.name }}
        </div>
      </div>
      <!-- Cast -->
      <div class="cast" v-if="element.cast">
        <h5>Cast</h5>
        <div class="actor" v-for="(actor, index ) in element.cast" :key="actor.name + index">
          {{ actor.name }}
        </div>
      </div>

      <p class="overview">
        <strong>Overview</strong>
        {{ element.overview }}
      </p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ItemComponent',
  props: {
    element: Object,
    itemKey: String,
    genres: Array
  },
  data() {
    return {
      flags: ['it', 'ja', 'fr', 'en'],
    }
  },
  methods: {
    selectedFlags(code) {
      if (this.flags.includes(code.toLowerCase())) {
        return true
      } else {
        return false
      }
    },
    generateImageUrl(name) {
      if (!name) {
        return 'https://placeholder.pics/svg/342x513/DEDEDE/555555/Coming%20Soon'
      }
      return `https://image.tmdb.org/t/p/w342/${name}`
    },
    getVote(vote) {
      return Math.ceil(vote / 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;


  .card-text {
    padding: 1.5rem;
    .rating {
      color: yellow;
    }
    .overview {
      height: 200px;
      overflow-y: auto;
    }
  }
}
</style>