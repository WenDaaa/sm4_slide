import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pako',
    name: 'pako',
    component: () => import(/* webpackChunkName: "about" */ '../views/pako.vue')
  },
  {
    path: '/slide',
    name: 'slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slide.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
