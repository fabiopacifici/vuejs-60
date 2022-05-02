<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>Ciao Ciao</h3>
    <List/>

    <h4>Another list</h4>
    <ul>
      <li>Fabio</li>
    </ul>
  </div>
</template>

<script>
import List from "@/components/ListComponent.vue"

export default {
  name: 'App',
  components: {
    List
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
