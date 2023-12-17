import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/impressum',
      name: 'impressum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Impressum.vue')
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: () => import('../views/Datenschutz.vue')
    }
  ]
})

export default router
