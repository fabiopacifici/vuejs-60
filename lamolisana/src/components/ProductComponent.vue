<template>
  <div class="col-3">
    <div class="product">
      <img :src="src" :alt="titolo" />
      <h4>{{ titolo }}</h4>

<!-- 
       <img :src="pasta.src" :alt="pasta.titolo" />
      <h4>{{ pasta.titolo }}</h4> -->
    </div>
  </div>
</template>

<script>
export default {
    nome: 'ProductComponent',
    props: {
        //pasta : Object,
        src: String,
        titolo: String
    }

};
</script>

<style lang="scss" scoped>
.product {
  margin-bottom: 1rem;
  background-color: white;
}
</style>