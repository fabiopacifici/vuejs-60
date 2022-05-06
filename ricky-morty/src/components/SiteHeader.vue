<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Ricky Morty</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <SearchBox v-model="searchText" @formSubmit="search"></SearchBox>
          
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import state from '@/state.js';
export default {
  name: 'SiteHeader',
  components: {
    SearchBox
  },
  data(){
    return {
      searchText: ''
    }
  },
  methods: {
    search(){
      console.log('Searching...');
      console.log(this.searchText);
      state.searchText = this.searchText;
      console.log(state);
    }
  }
};
</script>

<style>
</style>