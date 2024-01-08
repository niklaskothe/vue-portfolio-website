<script setup>
import TiltingCard from './TiltingCard.vue';
</script>

<template>
    <div class="hero">
            <div class="heroText">
                <h2 contenteditable="true">Hi, mein Name ist Lorem Ipsum.</h2>
                <p contenteditable="true">Ich erstelle Sachen</p>
                <button onclick="window.location.href='#section6';">Nimm Kontakt auf!</button>
            </div>
            <div>
                <!-- <img class="heroImg" src="../../public/img/wandern.jpg" alt="Wandern"> -->
                <TiltingCard/>
            </div>
        </div>
</template>

<style>
.hero {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 8px;
    margin: 64px 8px 0 8px;
    padding: 16px 8px 0 8px;
}

.heroImg {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: bottom center;
}

.heroText {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.heroText button {
    color: #fff;
    background-color: var(--color-highlight);
    max-width: 13rem;
    transition: background-color 0.3s ease;
}

.heroText button:hover {
    background-color: rgb(0,0,0,0.2);   
}

@media (max-width: 1024px) {
    .hero {
        display: flex;
        flex-direction: column-reverse;
        margin: 0;
    }

    .heroImg {
        height: 50vh;
    }
}
</style>