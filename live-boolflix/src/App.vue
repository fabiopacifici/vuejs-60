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
      <div class="container" v-if="movies_data">
        <div class="movie" v-for="movie in movies_data.results" :key="movie.id">
          {{ movie.title }}
          {{ movie.original_title }}          
          {{movie.vote_average}}
          <img width="20" :src="generateFlagImageURL(movie.original_language)" alt="" v-if="selectedFlags(movie.original_language)">
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
      flags: ['it', 'ja', 'fr']
    }
  },
  methods: {
    callApi(query) {
      axios
        .get(`${this.API_base_url}search/movie?api_key=${this.API_KEY}&query=${query}`)
        .then(response => {
          console.log(response.data);
          this.movies_data = response.data
        })
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
    },
    generateFlagImageURL(code){
      return `https://countryflagsapi.com/svg/${code}`
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
