<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const height = ref('0%')
const isOpened = ref(false)
const darkMode = ref(true)

function getTheme() {
  if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    darkMode.value = true
  } else {
    darkMode.value = false
  }
}
getTheme();

function toggleHamburger() {
  isOpened.value = !isOpened.value
}

function toggleNav() {
  toggleHamburger()
  height.value = height.value === '0%' ? '100%' : '0%'
}

function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    
    // Logik, um die CSS-Variablen für den Tag-/Nachtmodus zu ändern
    if (darkMode.value) {
      document.documentElement.style.setProperty('--color-background', 'var(--vt-c-black)');
      document.documentElement.style.setProperty('--color-background-soft', 'var(--vt-c-black-soft);');
      document.documentElement.style.setProperty('--color-background-mute', 'var(--vt-c-black-mute)');
      document.documentElement.style.setProperty('--color-border', 'var(--vt-c-divider-dark-2)');
      document.documentElement.style.setProperty('--color-border-hover', 'var(--vt-c-divider-dark-1)');
      document.documentElement.style.setProperty('--color-heading', 'var(--vt-c-text-dark-1)');
      document.documentElement.style.setProperty('--color-text', 'var(--vt-c-text-dark-2)'); 


    } else {
      document.documentElement.style.setProperty('--color-background', 'var(--vt-c-white)');
      document.documentElement.style.setProperty('--color-background-soft', 'var(--vt-c-white-soft);');
      document.documentElement.style.setProperty('--color-background-mute', 'var(--vt-c-white-mute)');
      document.documentElement.style.setProperty('--color-border', 'var(--vt-c-divider-light-2)');
      document.documentElement.style.setProperty('--color-border-hover', 'var(--vt-c-divider-light-1)');
      document.documentElement.style.setProperty('--color-heading', 'var(--vt-c-text-light-1)');
      document.documentElement.style.setProperty('--color-text', 'var(--vt-c-text-light-2)'); 

    }
}

</script>

<template>
  <header>
    <div class="navBar">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="48" height="48"/>

      <h1>Portfolio</h1>

      <div class="hamburger" :class="{opened: isOpened}" @click="toggleNav">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div id="myNav" class="overlay" v-bind:style="{ height }">
        <nav class="overlayContent">
          <RouterLink @click="toggleNav" to="/">Home</RouterLink>
          <RouterLink @click="toggleNav" to="/about">About</RouterLink>
          <RouterLink @click="toggleNav" to="/komponenten">Komponenten</RouterLink>
        </nav>
      </div>
    </div>
    
     

    <div class="dark-mode-container">
      <button @click="toggleDarkMode" class="dark-mode-toggle" :class="{ 'light-mode': lightMode, 'dark-mode': !lightMode }">
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </div>
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
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


/* Hamburger Overlay */
/*------------------------------------*/
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* fallback Farbe */
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlayContent {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* verhindert Überlagerung bei zu geringer Höhe */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
}


/*------------------------------------*/

/* Hamburger */
/*------------------------------------*/
.hamburger {
  /*
  position: absolute;
  top: 20px;
  right: 45px;
  */
  z-index: 2;
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.opened .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

.opened .bar2 {opacity: 0;}

.opened .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}

.opened .bar1, .opened .bar3 {
  background-color: #818181;
}
/*------------------------------------*/

/* Tag-/Nachtmodus-Schalter */
.dark-mode-container {
  position: absolute;
  top: 22px;
  right: 0px;
  z-index: 2;
  display: inline-block;
  cursor: pointer;
}

.dark-mode-toggle {
  background-color: var(--color-background); 
  color: var(--color-heading); 
  border: 1px solid var(--color-border); 
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.dark-mode-toggle:hover {
  background-color: var(--color-background-soft); 
  color: var(--color-text);
  border-color: var(--color-border-hover); 
}



</style>
