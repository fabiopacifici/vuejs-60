<template>
  <div class="col-4" >
    <h3>{{ menuTitle }}</h3>
    <ul>
      <li v-for="(link, index) in menuLinks" :key="index">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'FooterMenuItem',
    props : {
        menuTitle: String,
        menuLinks: Array
    }

};
</script>

<style>
</style>