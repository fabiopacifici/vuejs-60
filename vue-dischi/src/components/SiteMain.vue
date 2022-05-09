<template>
  <main class="py-4">
    <div class="container">
      <div class="row row-cols-5 g-3" v-if="discs">
        <Disc :disc="disc" v-for="(disc, index) in filteredDiscks" :key="index"></Disc>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import Disc from '@/components/DiscComponent.vue'
/* Import the global state */
import state from '@/state'

export default {
  name: "SiteMain",
  components: { Disc },
  data() {
    return {
      discs: null,
      loading: true,
    };
  },
  computed: {
    filteredDiscks() {
      return this.discs.filter(disc => {
        return disc.genre.toLowerCase().includes(state.selected.toLowerCase())
      })
    },
   
  },
  methods: {
     getGenres() {
      const gen = [] // Genrelist
      this.discs.forEach(disc => {
        if (!gen.includes(disc.genre)) {
          gen.push(disc.genre)
        }
      })
      return gen
    },
    callApi() {
      axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(response => {  
        this.discs = response.data.response;
        this.loading = false;
        state.genres = this.getGenres();   
      }).catch(error => {
        console.log(error);
        this.error = `OPS! ${error.message}`;
      })
    },
    
  },
  mounted() {
    this.callApi()
  }
}
</script>

<style lang="scss">
</style>