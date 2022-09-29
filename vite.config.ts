import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    /**
      * 在生产中服务时的基本公共路径。
      * @default '/'
    **/
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'assets': path.resolve(__dirname, './src/assets'),
        'pages': path.resolve(__dirname, './src/pages'),
        'components': path.resolve(__dirname, './src/components'),
        'baseComponents': path.resolve(__dirname, './src/baseComponents'),
        'utils': path.resolve(__dirname, './src/utils'),
        'apis': path.resolve(__dirname, './src/apis')
      }
    },
    server: {
      port: 8888,
      host: 'localhost',
      open: false,
      proxy: {
        '/apis': {
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
          ws: false,
          rewrite: (path) => path.replace(/^\/apis/, '')
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
  }
})
