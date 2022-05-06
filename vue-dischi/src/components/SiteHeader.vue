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
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
header {
  .nav {
    background-color: $spotify-dark-light;
  }
}
</style>