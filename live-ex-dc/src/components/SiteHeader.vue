<template>
  <header>
    <nav>
      <div class="container">
        <Logo />
        
        <MainMenu />

      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/LogoComponent.vue";
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "SiteHeader",
  components: {
    Logo, 
    MainMenu
  },
  
};
</script>

<style lang="scss" scoped>
  nav {
    box-shadow: 0 0 5px $dc-light-dark;
    
    .container {
      justify-content: space-between;
      align-items: center;
      display: flex;
      
    }

  }
</style>