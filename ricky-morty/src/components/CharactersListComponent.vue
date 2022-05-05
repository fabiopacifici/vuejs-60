<template>
  <div>
    <section class="characters" v-if="!loading">
      <div class="container">
        <h1 class="text-center my-3">Characters</h1>
        <div class="row g-3">
          <Character
            :character="character"
            v-for="character in characters"
            :key="character.id"
          />
        </div>
      </div>
    </section>
    <div
      class="d-flex min-vh-100 align-items-center justify-content-center"
      v-else
    >
      <h1>loading ...</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Character from "@/components/CharacterComponent";
export default {
  name: "CharactersListComponent",
  components: {
    Character,
  },

  data() {
    return {
      API_URL: "https://api.sampleapis.com/rickandmorty/characters",
      characters: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    callApi() {
      axios
        .get(this.API_URL)
        .then((response) => {
          this.characters = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error();
          error;
          this.error = `Sorry There is a problem! ${error}`;
        });
    },
  },
  mounted() {
    this.callApi();
  },
};
</script>

<style scoped>
h1 {
    font-weight: 900;
}
</style>