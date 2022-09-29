<template>
  <div class="to-top"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    right: {
      type: String,
      default: '40px',
    },
    bottom: {
      type: String,
      default: '40px',
    },
  },
  setup(props, context) {},
});
</script>

<style lang="less" scoped></style>
