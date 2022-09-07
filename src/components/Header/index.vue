<template>
  <div class="header">
    <ul class="nav-list">
      <li v-for="(item,index) in navList" :key="index">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent ({
    name:'Header',
    data(){
      return {
        navList:[
          {
            name:'首页',
            link:'/'
          }
        ]
      }
    }
  })
</script>

<style>

</style>