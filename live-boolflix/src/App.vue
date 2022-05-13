<template>
  <div id="app">
    <header>
      <nav class="main-nav d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/220513/aaf2ec219669aabcdaa3066c27dab003.png" alt="netflix-font" border="0"></a>
        </div>
        <SearchComponent v-model="searchText" @submitSearch="search" :disable-button="searchText.length < 1"></SearchComponent>
      </nav>
    </header>

    <main>
      <div class="container" v-if="show_results">
        <section class="container" :class="key" v-for="(restults_data, key) in results" :key="key">
          <h2 class="fx_text_primary py-4">{{key.toUpperCase()}}</h2>
          <div class="row row-cols-4 g-2">
            <ItemComponent :element="element" :itemKey="key" :class="key === 'movies' ? 'movie' : 'serie'" v-for="element in restults_data.results" :key="element.id" />
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
import SearchComponent from './components/SearchComponent.vue';
import ItemComponent from './components/ItemComponent.vue';
import SectionComponent from './components/SectionComponent.vue';

export default {
  name: 'App',
  components: {
    SearchComponent,
    ItemComponent,
    SectionComponent
},
  data() {
    return {
      searchText: '',
      API_base_url: 'https://api.themoviedb.org/3/',
      API_KEY: '8a82473cbca2910e464dbdb44137c5cf',
      movies_data: null,
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

  },
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';


/* Header  */

.main-nav{
  background-color: $fx-darkest;
  box-shadow: 0 2px 5px $fx-primary-darker;
}

/* Main Movie/Series Section */
.movie {
  transition: all 500ms;
}
.movie:hover {
  transform: scale(1.1);
  z-index: 1;
}
.movie img, .serie img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.movie:hover .card-text, .serie:hover .card-text {
  display: block!important;
  color: white;
  padding: 1rem;

}
.movie:hover img, .serie:hover img {
  filter: brightness(0.3);
}
</style>
