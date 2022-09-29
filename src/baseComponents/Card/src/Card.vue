<template>
  <div
    class="card"
    :style="getCardStyle"
    :class="[hoverToRotate ? 'rotate-card' : '']"
  >
    <template v-if="hoverToRotate">
      <div class="cover">
        <slot name="cover"></slot>
      </div>
      <div class="back">
        <slot name="back"></slot>
      </div>
    </template>
    <div v-else class="cover">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    width: {
      type: String,
      default: '300px',
    },
    height: {
      type: String,
      default: '400px',
    },
    hoverToRotate: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const getCardStyle = computed(() => {
      return {
        width: props.width,
        height: props.height,
      };
    });

    return {
      getCardStyle,
    };
  },
});
</script>

<style lang="less" scoped>
.card {
  display: inline-block;
  position: relative;
  // transition: transform 1s ease, box-shadow 1s ease;
  .cover,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  // &:hover {
  //   transform: translateY(-2%);
  //   box-shadow: 1px 4px 10px 2px rgba(0, 0, 0, 0.1);
  // }
}
.rotate-card {
  transform-style: preserve-3d;
  perspective: 1000;
  -webkit-perspective: 1000;
  .back,
  .cover {
    transition: transform 2s ease;
    backface-visibility: hidden;
  }
  .cover {
    transform: rotateY(0deg);
  }
  .back {
    transform: rotateY(-180deg);
  }

  &:hover {
    .cover {
      transform: rotateY(-180deg);
    }
    .back {
      transform: rotateY(-360deg);
    }
  }
}
</style>
