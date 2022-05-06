<template>
  <main class="py-4">
    <div class="container">
      <div class="row row-cols-5 g-3">
        <Disc :disc="disc" v-for="(disc, index) in discs" :key="index"></Disc>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import Disc from '@/components/DiscComponent.vue'
export default {
  name: "SiteMain",
  components: { Disc },
  data() {
    return {
      discs: null,
      loading: true
    };
  },
  mounted() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(response => {
      console.log(response);
      this.discs = response.data.response;
      this.loading = false;
    })
      .catch(error => {
        console.log(error);
        this.error = `OPS! ${error.message}`;
      });
  },
}
</script>

<style lang="scss">
</style>