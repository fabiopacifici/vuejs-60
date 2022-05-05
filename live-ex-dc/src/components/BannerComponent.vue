<template>
  <div class="banner">
    <div class="container">
      <div class="row align-center">
        <div class="col" v-for="item in banner" :key="item.id">
          <div class="item">
            <img :src="item.src" :alt="item.text" />
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  data() {
    return {
      banner: [
        {
          id: 1,
          src: require("@/assets/img/buy-comics-digital-comics.png"),
          text: "Digital Comics",
        },
        {
          id: 2,
          src: require("@/assets/img/buy-comics-merchandise.png"),
          text: "DC Merchandise",
        },
        {
          id: 3,
          src: require("@/assets/img/buy-comics-subscriptions.png"),
          text: "Subscriptions",
        },

        {
          id: 4,
          src: require("@/assets/img/buy-comics-shop-locator.png"),
          text: "Comic shop locator",
        },
        {
          id: 5,
          src: require("@/assets/img/buy-dc-power-visa.svg"),
          text: "DC Power Visa",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background: $dc-primary;
  color: $dc-white;
  padding: 2rem 0;
  
  .item {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      img {
          width: 50px;
      }
  }
}
</style>