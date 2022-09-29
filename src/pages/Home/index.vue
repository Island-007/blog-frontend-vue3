<template>
  <div class="home">
    <Modal :show="show" @close="closeModal"></Modal>
    <Button @click="openModal">打开遮罩</Button>
    <Button @click="openDialog">打开弹窗</Button>
    <Dialog :dialogShow="dialogShow" title="标题" @open="handleOpen">
      <p>弹窗内容</p>
      <template #footer>
        <Button>确 认</Button>
        <Button @click="dialogShow = false">取 消</Button>
      </template>
    </Dialog>
    <Card width="200px" height="300px">
      <template #cover> 正面 </template>
      <template #back> 反面 </template>
    </Card>
    <Card width="200px" height="300px" :hoverToRotate="false">
      无翻转效果的卡片
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from '../../baseComponents/Button/src/Button.vue';
// import { getList } from "apis/test";
export default defineComponent({
  name: 'Home',
  setup() {
    const show = ref(false);
    const dialogShow = ref(false);
    function openModal() {
      show.value = true;
    }
    function openDialog() {
      dialogShow.value = true;
    }
    function closeModal() {
      show.value = false;
    }
    function handleOpen() {
      console.log('open');
    }
    return {
      show,
      dialogShow,
      openModal,
      openDialog,
      closeModal,
      handleOpen,
    };
  },
  components: { Button },
});
</script>

<style scoped>
.home {
}
</style>
