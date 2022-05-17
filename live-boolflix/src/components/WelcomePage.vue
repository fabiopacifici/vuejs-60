<template>
  <div class="welcome-page pb-4">
    <BannerComponent :element="getRandomElement" :video-key="video_key" v-if="!loading"
      @show-trailer="showBannerTrailer" />

    <section class="popular container-fluid px-4" v-if="!loading">

      <h2>Popular on boolflix</h2>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-5">
        <ItemComponent @showModal="show_modal(element)" class="short-card" :element="element" v-for="element in popular"
          :key="element.id" :itemKey="'movies'" />
      </div>
    </section>
    <LoadingCards v-else />

    <ModalComponent :content="modal_data" :open-modal="showing_modal" @close-modal="showing_modal = false">
      <h3>Trailers</h3>
      <div class="trailers row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3" v-if="modal_data && modal_data.trailers">
        <YouTubeIframe frame-width="258" frame-height="150" :video-id="item.key" v-for="item in modal_data.trailers"
          :key="item.id" />
      </div>
    </ModalComponent>
  </div>

</template>


<script>
import { callVideosAPI, callPopularMoviesAPI } from "@/modules/axios-calls"
import ItemComponent from "./ItemComponent.vue"
import ModalComponent from "./ModalComponent.vue"
import YouTubeIframe from "./YouTubeIframe.vue"
import BannerComponent from "./BannerComponent.vue"
import LoadingCards from './LoadingCards.vue'

export default {
  name: 'WelcomePage',
  components: {
    ItemComponent,
    ModalComponent,
    YouTubeIframe,
    BannerComponent,
    LoadingCards
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
      callVideosAPI(id)
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
      callVideosAPI(item.id)
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
      callPopularMoviesAPI()
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