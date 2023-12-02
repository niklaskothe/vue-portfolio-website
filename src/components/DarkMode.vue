<script setup>
import { ref } from 'vue'
import IconSun from './icons/IconSun.vue';
import IconMoon from './icons/IconMoon.vue';

const darkMode = ref(true)

function getTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
        darkMode.value = true
    } else {
        darkMode.value = false
    }
}
getTheme();

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
    <!--
    <div class="dark-mode-container">
        <button @click="toggleDarkMode" class="dark-mode-toggle"
            :class="{ 'light-mode': !darkMode, 'dark-mode': darkMode }">
            {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
    </div>
    -->

    <div class="iconContainer" @click="toggleDarkMode">
        <button v-if="darkMode" class="iconButton">
            <IconSun/>
        </button>
        <button v-else class="iconButton">
            <IconMoon/>
        </button>
    </div>
</template>

<style>
/* Tag-/Nachtmodus-Schalter */
.dark-mode-container {
    position: fixed;
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

.iconContainer {
    width: fit-content;
    position: fixed;
    bottom: 10%;
    right: 5%;
}

.iconButton {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    background-color: var(--color-background);
    color: var(--color-heading);
    border: 1px solid var(--color-border);
    border-radius: 50%;
}


</style>