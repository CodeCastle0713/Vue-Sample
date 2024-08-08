import {reactive} from 'vue'

export const store = reactive({
    count : 0,
    set(val){
        this.count = val
    },
    get(){
        return this.count;
    }
})

