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
        <div class="movie" v-for="movie in results.movies.results" :key="movie.id">
          {{ movie.title }}
          {{ movie.original_title}}          
          {{movie.vote_average}}
          <!-- lang flag -->
          <lang-flag :iso="movie.original_language" v-if="selectedFlags(movie.original_language)"/>
          <div v-else>
             {{movie.original_language}}
          </div>
        </div>
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
    getMovies(query){
      const movie_url = `${this.API_base_url}search/movie?api_key=${this.API_KEY}&query=${query}`
      return axios.get(movie_url)
    },
    getSeries(query){
       const series_url = `${this.API_base_url}search/tv?api_key=${this.API_KEY}&query=${query}`
      return axios.get(series_url)
    },

    search() {
      this.callApi(this.searchText)
      this.searchText = ''
    },
    selectedFlags(code){
      if(this.flags.includes(code.toLowerCase())) {
        return true
      } else {
        return false
      }
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
