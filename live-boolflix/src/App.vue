<template>
  <div id="app">
    <header>
      <nav class="main-nav d-flex justify-content-between align-items-center flex-wrap">
        <div class="left-menu d-flex align-items-center">
          <Logo />
          <a href="/" class="btn btn-outline-danger text-uppercase ms-4 rounded-pill">Home</a>
        </div>

        <div class="filters d-flex gap-3 align-items-center flex-wrap">

          <div class="selectFilters d-flex gap-3" v-if="show_results">
            <!-- Filter movies by genre  -->
            <SelectFilter v-model="genreMovieSelection" :genreList="genres.movie"
              @updateGenreSelection="select_a_genre('movies', genreMovieSelection)" type="movies" />


            <!-- Filter series by genre  -->
            <SelectFilter v-model="genreSerieSelection" :genreList="genres.tv"
              @updateGenreSelection="select_a_genre('series', genreSerieSelection)" type="series" />
          </div>


          <SearchComponent v-model="searchText" @submitSearch="search" :disable-button="searchText.length < 1">
          </SearchComponent>
        </div>
      </nav>
    </header>

    <main>
      <div v-if="show_results">
        <SectionComponent class="container-fluid px-5" :class="key" v-for="(restults_data, key) in results" :key="key"
          :sectionTitle="key">
          <ItemComponent :element="element" :genres="getElementGenres(element, key)" :itemKey="key"
            :class="key === 'movies' ? 'movie' : 'serie'"
            v-for="element in key === 'movies' ? filterMoviesData : filterSeriesData" :key="element.id"
            @showModal="show_modal(element)" />
        </SectionComponent>
        <ModalComponent :content="modal_data" :open-modal="showing_modal" @close-modal="showing_modal = false">
          <div class="container" v-if="modal_data && modal_data.trailers.length > 0">
            <h3>Trailers</h3>
            <div class="trailers row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              <YouTubeIframe class=" flex-grow-1" frame-width="258" frame-height="150" :video-id="item.key"
                v-for="item in modal_data.trailers" :key="item.id" />
            </div>
          </div>
        </ModalComponent>
      </div>
      <div v-else>
        <WelcomePage />
      </div>


    </main>

  </div>
</template>

<script>
import { callSearchAPI, callCastAPI, callGenreAPI, callVideosAPI } from '@/modules/axios-calls'
import SearchComponent from './components/SearchComponent.vue';
import ItemComponent from './components/ItemComponent.vue';
import SectionComponent from './components/SectionComponent.vue';
import WelcomePage from './components/WelcomePage.vue';
import Logo from './components/LogoComponent.vue';
import SelectFilter from './components/SelectFilter.vue';
import ModalComponent from './components/ModalComponent.vue';
import YouTubeIframe from './components/YouTubeIframe.vue';
//import BannerComponent from './components/BannerComponent.vue';
export default {
  name: 'App',
  components: {
    SearchComponent,
    ItemComponent,
    SectionComponent,
    WelcomePage,
    Logo,
    SelectFilter,
    ModalComponent,
    YouTubeIframe
    //BannerComponent
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
      },
      /* Modal properties */
      video_key: null,
      modal_data: null,
      showing_modal: true
    }
  },
  methods: {
    callApi(query) {

      Promise.all([callSearchAPI('movie', query), callSearchAPI('tv', query)])
        .then(response => {
          console.log(response) // Array [{}, {}]
          // create an object in the data function
          // loop over the response array or grab the first element of the response
          const movies = response[0].data
          const series = response[1].data

          // Cast
          this.addCastTo(movies, 'movie')
          this.addCastTo(series, 'tv')
          // Trailers
          this.addTrailersTo(movies, 'movie')
          this.addTrailersTo(series, 'tv')
          // create for each response a new key and assign the response.data as its value
          this.$set(this.results, 'movies', movies)
          this.$set(this.results, 'series', series)
          this.show_results = true
        }).catch(err => {
          console.log(err);
        })
    },
    search() {
      this.callApi(this.searchText)
      this.searchText = ''
    },
    addCastTo(entity_object, type) {
      entity_object.results.forEach(entity => {
        callCastAPI(type, entity.id)
          .then(resp => {
            const cast = resp.data.cast.length > 5 ? resp.data.cast.splice(0, 5) : resp.data.cast;
            this.$set(entity, 'cast', cast)

          }).catch(err => {
            console.log(err.message);
          })
      })
    },
    getGenres(type) {
      callGenreAPI(type)
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
      this.genreFilter[type].genre_id = Number(genre_id)
    },
    show_modal(item) {
      console.log(item);
      this.modal_data = item;
      this.showing_modal = true;
    },
    addTrailersTo(entity_object, type) {
      console.log(entity_object);
      entity_object.results.forEach(entity => {
        callVideosAPI(entity.id, type)
          .then(resp => {
            console.log(resp);
            this.$set(entity, 'trailers', resp.data.results.splice(0, 5))
          }).catch(err => {
            console.error(err);
          })
      })
    }
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
