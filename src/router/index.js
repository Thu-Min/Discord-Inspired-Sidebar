import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sideBar',
    name: 'sideBar',
    component: () => import('../components/SideBar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router