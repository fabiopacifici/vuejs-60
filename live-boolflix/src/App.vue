<template>
  <div id="app">
    <header>
      <nav>
        <div class="logo">
          LOGO
        </div>
        <form @submit.prevent="search">
          <input type="search" v-model="searchText">
          <button :disabled="searchText.length < 1">Search</button>
        </form>
      </nav>
    </header>

    <main>
      <div class="container" v-if="show_results">

        <section class="movies">
          <h2>Movies</h2>
          <div class="movie" v-for="movie in results.movies.results" :key="movie.id">
            <!-- Add the movie image -->
            <img :src="generateImageUrl(movie.poster_path)" alt="">
            {{ movie.title }}
            {{ movie.original_title }}

            <!-- Add vote as star with Fontawesome -->
            <div class="rating">
              <font-awesome-icon icon="fa-solid fa-star" v-for="vote in getVote(movie.vote_average)"
                :key="vote + 'full'" />
              <font-awesome-icon icon="fa-regular fa-star" v-for="vote in 5 - getVote(movie.vote_average)"
                :key="vote + 'empty'" />
            </div>

            <!-- Add vote as stars With Bootstrap
            <div class="rating">
              <span class="star-fill" v-for="vote in getVote(movie.vote_average)" :key="vote + 'full'">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
              <span class="star-empty" v-for="vote in 5 - getVote(movie.vote_average)" :key="vote + 'empty'">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
                  viewBox="0 0 16 16">
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </span>
            </div>-->



            <!-- lang flag -->
            <lang-flag :iso="movie.original_language" v-if="selectedFlags(movie.original_language)" />
            <div v-else>
              {{ movie.original_language }}
            </div>
          </div>
        </section>

        <section class="series">
          <h2>Series</h2>
          <div class="serie" v-for="serie in results.series.results" :key="serie.id">
            <!-- Add the movie image -->
            <img :src="generateImageUrl(serie.poster_path)" alt="">
            {{ serie.name }}
            {{ serie.original_name }}
            {{ serie.vote_average }}
            <!-- lang flag -->
            <lang-flag :iso="serie.original_language" v-if="selectedFlags(serie.original_language)" />
            <div v-else>
              {{ serie.original_language }}
            </div>
          </div>

        </section>

      </div>
      <div v-else>
        <p>No thing to show here, try to search something</p>
      </div>


    </main>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      searchText: '',
      API_base_url: 'https://api.themoviedb.org/3/',
      API_KEY: '8a82473cbca2910e464dbdb44137c5cf',
      movies_data: null,
      flags: ['it', 'ja', 'fr', 'en'],
      results: {},
      show_results: false
    }
  },
  methods: {
    callApi(query) {

      Promise.all([this.getMovies(query), this.getSeries(query)])
        .then(response => {
          console.log(response) // Array [{}, {}]
          // create an object in the data function
          // loop over the response array or grab the first element of the response
          const movies = response[0]
          const series = response[1]
          // create for each response a new key and assign the response.data as its value
          this.$set(this.results, 'movies', movies.data)
          this.$set(this.results, 'series', series.data)
          this.show_results = true
        }).catch(err => {
          console.log(err);
        })
    },
    getMovies(query) {
      const movie_url = `${this.API_base_url}search/movie?api_key=${this.API_KEY}&query=${query}`
      return axios.get(movie_url)
    },
    getSeries(query) {
      const series_url = `${this.API_base_url}search/tv?api_key=${this.API_KEY}&query=${query}`
      return axios.get(series_url)
    },

    search() {
      this.callApi(this.searchText)
      this.searchText = ''
    },
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
  },
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
