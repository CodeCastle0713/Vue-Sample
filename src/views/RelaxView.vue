<script setup>
  import {ref, provide} from 'vue';

  import SideBar from '@/components/SideBar.vue';
  import GlobalManage from '@/views/relax/GlobalManage.vue';
  import HookView from '@/views/relax/HookView.vue';
  import RequestAPI from '@/views/relax/RequestAPI.vue';
  import Slot from '@/views/relax/Slot.vue';

  const sideBarStatus = ref(1);
  const count = ref(100)

  const chanageSideBarStatus = (index) => {
    sideBarStatus.value = index;
  }
  const outCount = () => {
      console.log('The count is outputed')
  }

  provide('key', {
      count,
      outCount
  })
</script>

<template>
  <main>
    <SideBar :method = "chanageSideBarStatus"/>
    <content v-if="sideBarStatus === 1">
      <GlobalManage />
    </content>
    <content v-else-if="sideBarStatus === 2">
      <HookView />
    </content>
    <content v-else-if="sideBarStatus === 3">
      <RequestAPI />
    </content>
    <content v-else-if="sideBarStatus === 4">
      <Slot />
    </content>
  </main>
</template>

<style scoped>
  main{
    display:flex;
  }
  content{
    padding-left: 10px;
  }
</style>
