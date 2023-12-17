<script setup>
function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="footer">
        <RouterLink @click="toTop" to="/">Home</RouterLink>
        <RouterLink @click="toTop" to="/impressum">Impressum</RouterLink>
        <RouterLink @click="toTop" to="/datenschutz">Datenschutz</RouterLink>
    </div>
    
</template>

<style>
.footer {
    margin-top: 32px;
    padding: 32px 0;
    display: flex;
    justify-content: center;
    gap: 32px;

    a {
        font-size: large;
    }
}

</style>