<template>
  <div id="app">
    <header>
      <nav class="main-nav d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="https://fontmeme.com/netflix-font/"><img
              src="https://fontmeme.com/permalink/220513/aaf2ec219669aabcdaa3066c27dab003.png" alt="netflix-font"
              border="0"></a>
        </div>

        <!-- Filter movies by genre  -->
        <form @change.prevent="select_a_genre('movies', genreMovieSelection)">
          <label :for="`genre-movies`">Filter Movies by Genre</label>`
          <select :id="`genre-movies`" class="d-inline-block" v-model="genreMovieSelection">
            <option value="">All genres</option>
            <option :value="genre.id" v-for="genre in genres.movie" :key="genre.id">
              {{ genre.name }}
            </option>
          </select>
        </form>

        <!-- Filter series by genre  -->
        <form @change.prevent="select_a_genre('series', genreSerieSelection)">
          <label :for="`genre-series`">Filter Series by Genre</label>`
          <select :id="`genre-series`" class="d-inline-block" v-model="genreSerieSelection">
            <option value="">All genres</option>
            <option :value="genre.id" v-for="genre in genres.tv" :key="genre.id">
              {{ genre.name }}
            </option>
          </select>
        </form>
        <SearchComponent v-model="searchText" @submitSearch="search" :disable-button="searchText.length < 1">
        </SearchComponent>
      </nav>
    </header>

    <main>
      <div class="container" v-if="show_results">
        <SectionComponent class="container" :class="key" v-for="(restults_data, key) in results" :key="key"
          :sectionTitle="key">
          <ItemComponent :element="element" :genres="getElementGenres(element, key)" :itemKey="key"
            :class="key === 'movies' ? 'movie' : 'serie'"
            v-for="element in key === 'movies' ? filterMoviesData : filterSeriesData" :key="element.id" />
        </SectionComponent>
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
      show_results: false,
      genres: {},
      genreMovieSelection: '',
      genreSerieSelection: '',
      genreFilter: {
        movies: {
          type: 'movies',
          genre_id: ''
        },
        series: {
          type: 'series',
          genre_id: ''
        },

      }
    }
  },
  methods: {
    callApi(query) {

      Promise.all([this.getMovies(query), this.getSeries(query)])
        .then(response => {
          console.log(response) // Array [{}, {}]
          // create an object in the data function
          // loop over the response array or grab the first element of the response
          const movies = response[0].data
          const series = response[1].data

          // Cast
          this.addCastTo(movies, 'movie')
          this.addCastTo(series, 'tv')

          // create for each response a new key and assign the response.data as its value
          this.$set(this.results, 'movies', movies)
          this.$set(this.results, 'series', series)
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
    addCastTo(entity_object, type) {
      //console.log(entity_object);
      entity_object.results.forEach(entity => {
        //console.log(entity);
        const url = `${this.API_base_url}${type}/${entity.id}/credits?api_key=${this.API_KEY}`
        axios.get(url).then(resp => {
          const cast = resp.data.cast.length > 5 ? resp.data.cast.splice(0, 5) : resp.data.cast;
          this.$set(entity, 'cast', cast)

        }).catch(err => {
          console.log(err.message);
        })
      })
      /*  
       let cast;
       axios
       .get(url)
       .then(response => {
         cast =  response.data.cast.splice(0, 5)
       }).catch(err => {
         console.log(err);
       })
       console.log(cast); */

    },
    getGenres(type) {
      const url = `${this.API_base_url}genre/${type}/list?api_key=${this.API_KEY}`
      axios
        .get(url)
        .then(resp => {
          this.$set(this.genres, type, resp.data.genres)
        })
    },
    getElementGenres(item, type) {
      // loop over the genres for the current type (movie/tv)
      const genreType = type === 'movies' ? 'movie' : 'tv';
      return this.genres[genreType].filter(genre => {
        // if the genre id matches the item.id then add the genre to the
        // new array and return the array 
        return item.genre_ids.includes(genre.id)
      })
    },
    select_a_genre(type, genre_id) {
      //console.log(type, genre_id);
      this.genreFilter[type].genre_id = genre_id
    },
  },
  computed: {
    filterMoviesData() {
      if (this.genreFilter.movies.genre_id == '') {
        return this.results.movies.results
      }
      return this.results.movies.results.filter(
        el => {
          //const el_ids = JSON.parse(JSON.stringify(el.genre_ids))  
          return el.genre_ids.includes(this.genreFilter.movies.genre_id)
        }
      )

    },
    filterSeriesData() {
       if (this.genreFilter.series.genre_id == '') {
        return this.results.series.results
      }
      return this.results.series.results.filter(
        el => {
          //const el_ids = JSON.parse(JSON.stringify(el.genre_ids))  
          return el.genre_ids.includes(this.genreFilter.series.genre_id)
        }
      )
    }
  },
  mounted() {
    this.getGenres('movie')
    this.getGenres('tv')
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';


/* Header  */

.main-nav {
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

.movie img,
.serie img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie:hover .card-text,
.serie:hover .card-text {
  display: block !important;
  color: white;
  padding: 1rem;

}

.movie:hover img,
.serie:hover img {
  filter: brightness(0.3);
}
</style>
