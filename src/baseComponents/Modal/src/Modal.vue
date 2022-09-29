<script lang="ts">
export default {
  name: 'Modal',
};
</script>
<script lang="ts" setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['close']);
const handleClickModal = function () {
  if (props.closeOnClickModal) {
    emit('close');
  }
  return;
};
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div class="modal" v-show="props.show" @click="handleClickModal">
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="less">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
}
</style>
