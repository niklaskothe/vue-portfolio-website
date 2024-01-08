<script setup>
import { ref } from 'vue'

const color = ref("#00916E");

function toggleHighlightColor() {
    document.documentElement.style.setProperty('--color-highlight', color.value);
}
</script>

<template>
    <div class="iconButton">
        <input v-model="color" type="color" id="colorPicker" name="highlightColor" @change="toggleHighlightColor()">
    </div>
    
</template>

<style>

#colorPicker {
    width: 32px;
    height: 32px;
    margin: 0;
    border: none;
    background: none;
}

</style>