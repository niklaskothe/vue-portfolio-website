<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import IconBar from './components/IconBar.vue';
import HamburgerMenu from './components/HamburgerMenu.vue';
import ProgressBar from './components/ProgressBar.vue';
import Footer from './components/Footer.vue';


const { sections } = defineProps(['sections']);

let renderFooterCount = 0;

// Überprüfe die Bedingung für das erste Auftreten
function shouldRenderFooter() {
  console.log(renderFooterCount);
  if (renderFooterCount === 0 || sections) {  
    renderFooterCount += 1;
    return false;
  }
 
  return true;
}

</script>

<template>
  <div v-if="shouldRenderFooter()"></div>
  <header v-if="sections">
    <div class="navBar">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="48" height="48"/>

      <h1>Portfolio</h1>

      <HamburgerMenu :sections="sections"/>
    </div>
    
    <div class="break"></div>
 
    <ProgressBar/>
  </header>
 
  <IconBar/>
  <RouterView />
 
  <Footer v-if="shouldRenderFooter()"/>
</template>




<style scoped>
/* Default Styles */
/*------------------------------------*/
header {
  line-height: 1.5;
  max-height: 100vh;

  position: sticky;
  top: 0;
  background: var(--color-background);
  padding: 8px;
  transition: background-color 0.5s, color 0.3s;
  z-index: 10;

  flex-wrap: wrap;
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

.break {
  flex-basis: 100%;
  height: 0;
}

</style>
