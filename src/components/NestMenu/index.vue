<template>
  <div class="nest-menu">
    <div class="menu-wrap">
      <span class="menu-item" v-for="item in data" :key="item.id" @click="handleSelectMenuItem(item)">{{item.name}}</span>
    </div>
    <nest-menu :ids="activeIds" :data="subMenu"></nest-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name:'NestMenu',
  props:["data","depth","activeIds"],
  setup(props,context) {
    let subMenu
    
    const handleSelectMenuItem =  (item) => {
      subMenu = item.children
    }
    return {
      subMenu,
      handleSelectMenuItem
    }
  }
})
</script>
 
<style scoped>

</style>
