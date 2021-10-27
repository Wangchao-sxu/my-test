import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from 'vue-router';

Vue.use(Router);

const router = new VueRouter({
  mode: 'hash', // 设置路由模式
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home')
    },
    {
      path: '/person',
      name: 'person',
      component: () => import('../views/person')
    }
  ]
})

export default router;