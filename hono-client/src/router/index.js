import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile/:username',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/watch/:videoId',
      component: () => import('../views/Watch.vue')
    }
  ]
})

export default router