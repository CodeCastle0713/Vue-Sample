<script setup>
    const props = defineProps({
        method:{
            type:Function
        }
    })
</script>

<template>
    <main>
        <button @click = "props.method(1)">GlobalManage</button>
        <button @click = "props.method(2)">Hook</button>
        <button @click = "props.method(3)">RequestAPI</button>
        <button @click = "props.method(4)">Slot</button>
    </main>
</template>

<style scoped>
    main{
        width:240px;
        min-height: 100vh;
        background-color: antiquewhite;
        display: flex;
        flex-direction: column;
    }
</style>