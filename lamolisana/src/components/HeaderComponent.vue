<template>
  <header id="site_header">
    <img alt="la Molisana logo" src="@/assets/img/la-molisana-logo.png">
    <nav>
      <a href="">Lorem.</a>
      <a href="" class="active">Eos.</a>
      <a href="">Maiores!</a>
      <a href="">Maiores!</a>

    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  text-align: center;

  nav {
    margin: 1.5rem 0;

    a {
      text-decoration: none;
      padding: 0.5rem 1rem;
      font-weight: bold;
      color: 333333;
    }

    a.active,
    a:hover {
      background-color: rgb(104, 212, 248);
    }
  }
}
</style>