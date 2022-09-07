<template>
   <el-row class="mb-4">
    <el-button>{{count}}</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  
  defineProps<{ msg: string }>()
  
  const count = ref(0)
</script>
  
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
