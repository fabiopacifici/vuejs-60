<template>
  <div class="main_menu">
    <a
      :href="item.href"
      v-for="item in menu"
      :key="item.id"
      :class="item.text === 'Comics' ? 'active' : ''"
      >{{ item.text }}</a
    >
  </div>
</template>

<script>
export default {
  name: "MainMenu",

  data() {
    return {
      menu: [
        {
          id: 1,
          href: "#",
          text: "Charcters",
        },
        {
          id: 2,
          href: "#",
          text: "Comics",
        },
        {
          id: 3,
          href: "#",
          text: "Movies",
        },
        {
          id: 4,
          href: "#",
          text: "TV",
        },
        {
          id: 5,
          href: "#",
          text: "Games",
        },
        {
          id: 6,
          href: "#",
          text: "Collectibles",
        },
        {
          id: 7,
          href: "#",
          text: "Video",
        },
        {
          id: 8,
          href: "#",
          text: "Fan",
        },
        {
          id: 9,
          href: "#",
          text: "News",
        },
        {
          id: 10,
          href: "#",
          text: "Shop",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main_menu {
  a {
    padding: 2.5rem 1.5rem;
    height: 100%;
    border-bottom: 4px solid transparent;
    color: $dc-dark;

    &:hover,
    &.active {
      color: $dc-primary;
      border-bottom: 4px solid $dc-primary;
    }
  }
}
</style>