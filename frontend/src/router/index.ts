import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/home.vue'
import Login from '@/views/login/login.vue'
import SignUp from '@/views/signup/signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
  ],
})

export default router
