<script setup>
import { ref } from 'vue'

const height = ref('0%')
const isOpened = ref(false)


function toggleHamburger() {
    isOpened.value = !isOpened.value
}

function toggleNav() {
    toggleHamburger()
    height.value = height.value === '0%' ? '100%' : '0%'
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden'
}
</script>

<template>
    <div class="hamburger" :class="{ opened: isOpened }" @click="toggleNav">
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
</template>

<style>
/* Hamburger Overlay */
/*------------------------------------*/
.overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: rgb(0, 0, 0);
    /* fallback Farbe */
    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
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

.overlay a:hover,
.overlay a:focus {
    color: #f1f1f1;
}

/* verhindert Überlagerung bei zu geringer Höhe */
@media screen and (max-height: 450px) {
    .overlay a {
        font-size: 20px
    }
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

.bar1,
.bar2,
.bar3 {
    width: 35px;
    height: 5px;
    background-color: var(--color-text);
    margin: 6px 0;
    transition: 0.4s;
}

.opened .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

.opened .bar2 {
    opacity: 0;
}

.opened .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}

.opened .bar1,
.opened .bar3 {
    background-color: #818181;
}
</style>