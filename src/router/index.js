import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/aktivitete',
    name: 'aktivitete',
    component: () => import( '../views/AktiviteteView.vue')
  },
  {
    path: '/menute',
    name: 'menute',
    component: () => import( '../views/MenuteView.vue')
  },
 
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/contact/ContactView.vue')
  },
 
 /* {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  } */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
