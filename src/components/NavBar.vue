<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <div class="inner">
            <div class="logo-group justify-between items-center">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
                <h1>Logo</h1>
            </div>
            <div class="link-group">
                <RouterLink to="/" class="link">Home</RouterLink>
                <RouterLink to="/about" class="link">About</RouterLink>
            </div>
        </div>
    </header>
</template>

<style scoped>
    header{
        background-color: black;
    }
    .inner{
        padding:10px;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .link{
        padding:0px 10px
    }
</style>