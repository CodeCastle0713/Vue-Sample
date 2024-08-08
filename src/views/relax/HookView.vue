<script setup>
    import { onMounted, ref, watch, computed,reactive,inject } from 'vue';
    import { store } from '@/store';

    const question = ref(0)
    const {count,outCount} = inject('key')
    const isDisabled = reactive(false)
    //Thie will be triggered at first.<=>useEffect(()=>{},[])
    onMounted(() =>{
        console.log('The first rendering as I understood.')
    })

    //This will be triggered while question value is changing.<=>useEffect(()=>{},[question])
    watch(question , (newValue) => {
        console.log("The value of question is changed toward :" + newValue)
    })
    
    //This will track for only changing about isDisabled value.
    //Then we have to use isCheckboxDisabled as result.
    const isCheckboxDisabled = computed({
        get(){
            return isDisabled.value;
        },
        set(newValue){
            isDisabled.value = newValue;
        }
    })

    const handleClick = () => {
        question.value += 1;
    }
</script>

<template>
    <h1>I am Global Value : {{ store.get() }}</h1>
    <h1>Test Provide & Inject : {{ count+1 }}</h1>
    <button @click="outCount">Click me to Test provide&inject</button>
    <button @click = "handleClick">
        <h1>Click Me</h1>
    </button> <br/>
    <!-- --------------- -->
    <input id="isDisabled" type="checkbox" v-model="isDisabled"/> Click me before I kill you.
    <div v-show="isCheckboxDisabled">Hellooooo!</div>
    <!-- --------------- -->
</template>

<style scoped>

</style>