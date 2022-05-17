<template>

  <div class="welcome-page pb-4">


    <BannerComponent :element="getRandomElement" :video-key="video_key" v-if="!loading" @show-trailer="showBannerTrailer"/>

    <section class="popular container-fluid px-4" v-if="!loading">

      <h2>Popular on boolflix</h2>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-5">
        <ItemComponent @showModal="show_modal(element)" class="short-card" :element="element" v-for="element in popular"
          :key="element.id" :itemKey="'movies'" />
      </div>
    </section>
    <div class="container-fluid p-4 placeholders" v-else>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
        <div class="item" v-for="card in 20" :key="card">
          <div class="card">
          </div>
        </div>
      </div>
    </div>
    <ModalComponent :content="modal_data" :open-modal="showing_modal" @close-modal="showing_modal = false">
      <h3>Trailers</h3>
      <div class="trailers row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3" v-if="modal_data && modal_data.trailers">
        <YouTubeIframe frame-width="258" frame-height="150" :video-id="item.key" v-for="item in modal_data.trailers"
          :key="item.id" />
      </div>
    </ModalComponent>
    <!--  <div class="fx_modal position-fixed top-0 h-100 " v-if="showing_modal && modal_data">
        <button class="btn btn-outline-dark text-white" @click="showing_modal = false">Close</button>
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-body d-flex justify-content-around">
          <img class="img-fluid" :src="'https://image.tmdb.org/t/p/w780/' + modal_data.backdrop_path" alt="">
          <div class="data_text px-4">
            <h2 class="display-3">{{ modal_data.title }}</h2>
            <p>{{ modal_data.overview }}</p>

          </div>
        </div>
      </div>
    </div> -->
  </div>

</template>


<script>
import axios from "axios"
import ItemComponent from "./ItemComponent.vue"
import ModalComponent from "./ModalComponent.vue"
import YouTubeIframe from "./YouTubeIframe.vue"
import BannerComponent from "./BannerComponent.vue"
export default {
  name: 'WelcomePage',
    components: {
      ItemComponent,
      ModalComponent,
      YouTubeIframe,
      BannerComponent
    },
  data() {
    return {
      popular: null,
      loading: true,
      video_key: null,
      modal_data: null,
      showing_modal: true
    }
  },
  methods: {

    showBannerTrailer(id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8a82473cbca2910e464dbdb44137c5cf&language=en-US`)
        .then(resp => {
          console.log(resp);
          this.video_key = resp.data.results[0].key
        })
    },
    show_modal(item) {
      console.log(item);

      this.modal_data = item;
      this.showing_modal = true;
    },
    getItemTrailers(item) {
      axios.get(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=8a82473cbca2910e464dbdb44137c5cf&language=en-US`)
        .then(resp => {
          //console.log(resp);
          this.$set(item, 'trailers', resp.data.results.splice(0, 5))
        }).catch(err => {
          console.error(err);
        })
    }

  },
  computed: {
    getRandomElement() {
      return this.popular[Math.ceil(Math.random() * this.popular.length) - 1]
    }
  },
  mounted() {
    setTimeout(() => {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8a82473cbca2910e464dbdb44137c5cf&language=en-US&page=1')
        .then(resp => {
          this.popular = resp.data.results
          this.loading = false

          // add all trailers to the results
          this.popular.forEach(item => {
            this.getItemTrailers(item)
          })

        })
    }, 1000)
  }
}
</script>

<style lang="scss">
.welcome-page {


  .placeholders {
    .card {
      background-color: gainsboro;
      height: 200px;
      animation: pulse 1.5s infinite;
    }
  }

  .popular {
    margin-top: -8rem;

    .item {
      overflow: hidden;

      img {
        width: 100%;
        
        object-fit: cover;
      }

      &:hover img {
        filter: brightness(0.5);
      }

      .card-text {
        text-align: center;
        padding: 1rem;
        max-width: 80%;

        h3,
        .overview {
          display: none;
        }

      }


      &:hover .card-text {
        color: white;
        display: block !important;
      }
    }
  }
}

@keyframes pulse {
  25% {
    transform: scale(1.025);
  }

  50% {
    transform: scale(1.0);
  }

  75% {
    transform: scale(1.025);
  }

}
</style>