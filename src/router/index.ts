import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      transition:'slide'
    }
  },{
    path:'/article-list',
    name:'ArticleList',
    component:() => import('../pages/ArticleList/index.vue'),
    meta: {
      transition:'slide'
    }
  },{
    path:'/page-test',
    name:'PageTest',
    component:() => import('../pages/PageTest/index.vue'),
    meta:{
      transition:'slide'
    }
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;