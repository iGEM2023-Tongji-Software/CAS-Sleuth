import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../view/databaseSearch.vue'
import HomePageVue from '@/components/HomePage.vue'
import databaseCard from '@/view/databaseCard.vue'
import databaseView from '@/view/databaseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/database',
    name: 'database',
    component: () => import('../view/databaseSearch.vue')
  },
  {
    path: '/software',
    name: 'software',
    component: () => import( '../view/databaseSearch.vue')
  },
  {
    path: '/databaseResult',
    name: 'databaseResult',
    component: () => import( '../view/databaseResult.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePageVue
  },
  {
    path: '/databaseCard',
    name: 'databaseCard',
    component: databaseCard
  },
  {
    path: '/databaseView',
    name: 'databaseView',
    component: databaseView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
