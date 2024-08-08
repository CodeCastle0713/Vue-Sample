<template>
    <main>
        <slot name = "header"/>
        <slot name = "time" class="time"/>
    </main>
</template>

<style scoped>
    main{
        padding:10px;
        border-radius: 5px;
        background-color: white;
        border: 1px solid pink;
        display:flex;
        flex-direction: column;
    }
</style>