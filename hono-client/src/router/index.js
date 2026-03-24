import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'
import Stars from '../views/Stars.vue'
import LoginPage from '../views/Login/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile/:username',
      component: Profile
    },
    {
      path: '/settings',
      component: Settings
    },
    {
      path: '/stars',
      component: Stars
    },
    {
      path: '/LoginPage',
      component: LoginPage
    }
  ]
})


export default router