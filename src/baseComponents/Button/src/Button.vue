<template>
  <button @click="handleClick" :class="['btn', `btn-${type}`]">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const TYPE = ['primary', 'success', 'warn', 'danger'];

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(value: string) {
        return TYPE.includes(value);
      },
    },
  },
  setup(props, context) {
    const handleClick = (e: Event) => {
      context.emit('click', e);
    };
    return {
      handleClick,
    };
  },
});
</script>

<style lang="less" scoped>
.btn {
  position: relative;
  padding: 10px 15px;
  font-size: 14px;
  background-color: #a35c8f;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.7), transparent);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: skewX(45deg) translateX(-150%);
    transition: 0.5s;
  }
  &:hover::before {
    transform: skew(45deg) translateX(200%);
  }
}
.btn + .btn {
  margin-left: 10px;
}
</style>
