<script setup>

import {ref} from 'vue';

const { sections } = defineProps(['sections']);


const height = ref('0%')
const isOpened = ref(false)


function toggleHamburger() {
    isOpened.value = !isOpened.value
}

function toggleNav() {
    //Steuerung des HamburgerButtons und Menues
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
  
    <!--alle vorhandenen Sektionen durchgehen (dynamisch) und ausgeben-->
    <div id="myNav" class="overlay" v-bind:style="{ height }">
        <nav id="test" class="overlayContent" style="max-height: 800px; overflow-y: auto;">
            <a v-for="section in sections" :key="section.uniqueId" @click="toggleNav" :href="`#${section.uniqueId}`">
                {{ section.props.title ? section.props.title : 'Start' }}
            </a>
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
    top: 20%;
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

a {
    scroll-behavior: smooth;
}
</style>