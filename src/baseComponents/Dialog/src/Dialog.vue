<template>
  <div class="dialog">
    <modal
      :show="dialogShow"
      :closeOnClickModal="closeOnClickModal"
      @close="handleClose"
    ></modal>
    <teleport to="body">
      <div class="dialog-container">
        <transition name="dialog-fade">
          <div
            v-show="dialogShow"
            class="dialog-wrap"
            :style="{ width: width, margin: `${top} auto` }"
          >
            <div class="dialog-title">
              <span class="title">{{ title }}</span>
            </div>
            <div class="dialog-content"><slot></slot></div>
            <div class="dialog-footer" v-if="$slots.footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </transition>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
export default defineComponent({
  name: 'Dialog',
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
    dialogShow: {
      type: Boolean,
      default: false,
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '30%',
    },
    top: {
      type: String,
      default: '20vh',
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const handleClose = () => {
      context.emit('close');
    };

    watch(
      () => props.dialogShow,
      (value) => {
        if (value) {
          context.emit('open');
        } else {
          context.emit('close');
        }
      }
    );

    return {
      handleClose,
    };
  },
});
</script>

<style scoped lang="less">
.dialog-container {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  .dialog-wrap {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    font-size: 16px;
    .dialog-title {
      padding: 20px 20px 10px;
    }
    .dialog-content {
      padding: 20px;
    }
    .dialog-footer {
      padding: 10px 20px 20px;
      text-align: right;
    }
  }
}
</style>
