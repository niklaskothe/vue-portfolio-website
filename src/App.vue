<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import DarkMode from './components/DarkMode.vue'
import HamburgerMenu from './components/HamburgerMenu.vue';

</script>

<template>
  <header>
    <div class="navBar">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="48" height="48"/>

      <h1>Portfolio</h1>

      <HamburgerMenu/>
    </div>
    
     

    <DarkMode/>
  </header>

  <RouterView />

</template>




<style scoped>
/* Default Styles */
/*------------------------------------*/
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

@media (max-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
/*------------------------------------*/

/* Navbar */
.navBar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
