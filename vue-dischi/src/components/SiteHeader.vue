<template>
  <header>
    <ul class="nav bg-spotify-lite">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <img height="40" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png
" alt="">
        </a>
      </li>
    </ul>
    <select name="types" id="types" v-model="selected" @change="filterDisks">
      <option value="">Select a Genre</option>
      <!-- <option value="Rock">Rock</option> -->
      <option :value="genre" v-for="(genre, index) in getGenres" :key="index" >{{genre}}</option>
    </select>
  </header>
</template>

<script>
import state from "@/state";
export default {
  name: 'SiteHeader',
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    getGenres() {
      return state.genres
    }
  },
  methods: {
    filterDisks(){
      // log the selected value to the console
      //console.log(this.selected)
      // save the value to the global storage
      state.selected = this.selected
    }
  },
  mounted(){
 
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $spotify-dark-light;
  padding: 0.5rem;
  select {
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;

  }
}
</style>