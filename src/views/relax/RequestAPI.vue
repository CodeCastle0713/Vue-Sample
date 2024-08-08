<script setup>
    import { onMounted } from 'vue';
    import requestAPI from '@/requestAPI.js';

    onMounted(async() => {
        try{
            await requestAPI.post('/data', {
                data : "I am data"
            }).then((res) => {
                console.log(res);
            })
        }catch (e) {
            console.log(e);
        }
    })
</script>

<template>
    <h1>
        This will send API request "onMounted".
    </h1>
</template>

<style scoped>
</style>