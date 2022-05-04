<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <h1>Lista Prodotti</h1>
      <ProductsList/>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';
import ProductsList from '@/components/ProductsListComponent';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    ProductsList
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  min-height: 50vh;
  background-image: url('@/assets/img/fondo-pag-speciali.jpg');
  text-align: center;
}
img {
  max-width: 100%;
}
.container {
  margin: auto;
  max-width: 1440px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex-grow: 1;
}
.col-3 {
  width: calc(100% / 12) * 3;
  padding: 1rem;
}


</style>
