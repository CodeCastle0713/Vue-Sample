<script setup>
    import {store} from '../../store.js'

    const handleManage = () => {
        store.set(3);
    }
</script>

<template>
    <button @click = "handleManage">GlobalState Management</button>
    <h1>{{ store.get() }}</h1>
</template>