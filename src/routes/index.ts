import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
