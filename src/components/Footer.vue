<template>
    <div class="footer">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/komponenten">Komponenten</RouterLink>
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