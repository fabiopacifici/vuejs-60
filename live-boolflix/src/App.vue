<template>
  <div id="app">
    <header>
      <nav class="main-nav d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/220513/aaf2ec219669aabcdaa3066c27dab003.png" alt="netflix-font" border="0"></a>
        </div>
        <form @submit.prevent="search">
        <div class="form-group d-flex">
           <input type="search" v-model="searchText" class="form-control" placeholder="Start searching">
          <button class="btn text-white" :disabled="searchText.length < 1">
            <font-awesome-icon icon="fa-solid fa-search"></font-awesome-icon>
          </button>
        </div>
         
        </form>
      </nav>
    </header>

    <main>
      <div class="container" v-if="show_results">

      <section class="container" :class="key" v-for="(restults_data, key) in results" :key="key">
        <h2 class="fx_text_primary py-4">{{key.toUpperCase()}}</h2>
        <div class="row row-cols-4 g-2">
         <div class="bg-transparent position-relative" :class="key === 'movies' ? 'movie' : 'serie'" v-for="element in restults_data.results" :key="element.id">
            <img class="img-fluid" :src="generateImageUrl(element.poster_path)" alt="">
              <div class="card-text tex-white d-none px-2 position-absolute top-0">  
                <h3>
                  {{ key == 'movies' ? element.title : element.name }}
                </h3>
                <h4>
                  {{ key == 'movies' ? element.original_title : element.original_name }}
                </h4>
    
                <!-- Add vote as star with Fontawesome -->
                <div class="rating">
                  <font-awesome-icon icon="fa-solid fa-star" v-for="vote in getVote(element.vote_average)"
                    :key="vote + 'full'" />
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
              </div>

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
