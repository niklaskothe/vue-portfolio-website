<script setup>
import { ref } from 'vue'
import IconChevronUp from './icons/IconChevronUp.vue';

const show = ref(false)


window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        show.value = true
    } else {
        show.value = false
    }
}


function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>

<template>
    <button v-if="show" @click="toTop" class="iconButton">
        <IconChevronUp/>
    </button>
</template>

<style>
.iconButton {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    background-color: var(--color-background);
    color: var(--color-heading);
    border: 1px solid var(--color-border);
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
</style>