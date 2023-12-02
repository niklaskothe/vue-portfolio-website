<script setup>

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
</script>

<template>
    <div class="progressContainer">
        <div class="progressBar" id="myBar"></div>
    </div>
</template>

<style>
.progressContainer {
    margin-top: 8px;
    width: 100%;
    height: 8px;
    background: var(--color-background-mute);
}

.progressBar {
    height: 8px;
    background: var(--color-highlight);
    width: 0%;
}
</style>