import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homePage',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/homePage',
        name: 'homePage',
        component: () => import('../views/homePage/homePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
