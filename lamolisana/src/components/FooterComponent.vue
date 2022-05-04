<template>
  <footer id="site_footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="@/assets/img/la-molisana-logo.png" alt="">
        </div>
        <div class="col">
          <h3>Panificio</h3>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div class="col">
          <h3>Prodotti</h3>
           <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped lang="scss">
footer {
  background-image: url('@/assets/img/footer-montagne-bottom.jpg');
  height: 380px;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-top: 2rem;
  h3 {
    margin-bottom: 1rem;
  }
  ul {
    list-style:none;
    li {
      color: gray;
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }
}
</style>