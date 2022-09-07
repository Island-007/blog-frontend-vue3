import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
      'assets':path.resolve(__dirname,'./src/assets'),
      'pages':path.resolve(__dirname,'./src/pages'),
      'components':path.resolve(__dirname,'./src/components'),
      'utils':path.resolve(__dirname,'./src/utils'),
    }
  },
  server: {
    port: 8888,
    host: 'localhost',
    open: false,
    proxy: {
      '/api': {
        target: `${process.env.VUE_APP_BASE_API}`,
        changeOrigin: true,
        ws: false,
        rewrite:(pathStr) => pathStr.replace('/api','')
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

})
