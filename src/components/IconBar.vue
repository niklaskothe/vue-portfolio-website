<script setup>
import DarkMode from './DarkMode.vue';
import ToTopButton from './ToTopButton.vue';
</script>

<template>
    <div class="iconBar">
        <ToTopButton/>
        <DarkMode/>
    </div>
</template>

<style>
.iconBar {
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 8px;

    width: fit-content;
    position: fixed;
    bottom: 10%;
    right: 5%;

    z-index: 5;
}
</style>