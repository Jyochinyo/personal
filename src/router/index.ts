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
  },
  {
    path: '/playgroundView',
    name: 'playgroundView',
    component: () => import('../views/playgroundView/playgroundView.vue')
  },
  {
    path: '/cocktail',
    name: 'cocktail',
    component: () => import('../views/cocktailPage/cocktailPage.vue')
  },
  {
    path: '/cocktailInfo/:id',
    name: 'cocktailInfo',
    component: () => import('../views/cocktailDetail/cocktailDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
