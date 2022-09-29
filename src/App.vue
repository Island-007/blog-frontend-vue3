<template>
  <div class="app">
    <!-- <Particles class="particles" id="tsparticles" :options="config" /> -->
    <Header />
    <router-view v-slot="{ Component,route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" class="page"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Header from './components/Header/index.vue' 
import { particlesConfig }  from './assets/config/particles-config'
import { defineComponent } from 'vue'

export default defineComponent({
  name:'App',
  components:{
    Header
  },
  data(){
    return {
      config:particlesConfig
    }
  }
})
</script>


<style lang="less">
@import '../src/assets/common.css';
.app {
  position: relative;
  .page {
    padding-top: 60px;
  }
}

#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: -10;
}
</style>
