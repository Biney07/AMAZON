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
  {
    path: '/homedetails',
    name: 'homedetails',
    component: () => import( '../views/home/HomeDetails.vue')
  },

  {
    path: '/homedetails/:dhomaId',
    name: 'homedetails',
    component: () => import( '../views/home/HomeDetails.vue')
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( '../views/dashboard/Dashboard.vue')
  },

  {
    path: '/dashboard/home',
    name: 'dashboardhomee',
    component: () => import( '../views/dashboard/home/homeDashboard.vue')
  },
  {
    path: '/dashboard/home/Home',
    name: 'dashboardhomeee',
    component: () => import( '../views/dashboard/home/Home.vue')
  },

  {
    path: '/dashboard/about',
    name: 'dashboardabout',
    component: () => import( '../views/dashboard/about/About.vue')
  },

  {
    path: '/dashboard/aktivitete',
    name: 'dashboardaktivitete',
    component: () => import( '../views/dashboard/aktivitetet/Aktivitetet.vue')
  },


   {
    path: '/dashboard/menute',
    name: 'MenuDashboard',
    component: () => import( '../views/dashboard/menute/MenuDashboard.vue')
  },
     {
    path: '/dashboard/menute/create',
    name: 'MenuCreate',
    component: () => import( '../views/dashboard/menute/Menute.vue')
  },
   {
    path: '/dashboard/menute/edit/:foodId',
    name: 'MenuEdit',
    component: () => import( '../views/dashboard/menute/MenuEdit.vue')
  },



  {
    path: '/dashboard/dasmat',
    name: 'dashboarddasmat',
    component: () => import( '../views/dashboard/dasmat/Dasmat.vue')
  },

  {
    path: '/dashboard/contact',
    name: 'dashboardcontact',
    component: () => import( '../views/dashboard/contact/Contact.vue')
  },

  {
    path: '/dashboard/register',
    name: 'dashboardregister',
    component: () => import( '../views/dashboard/register/Register.vue')
  },
  {
    path: '/restaurantdasmat',
    name: 'restaurantdasmat',
    component: () => import( '../views/dasmat/DasmatView.vue')
  },
  {
    path: '/restaurantdasmat/create',
    name: 'restaurantdasmatcreate',
    component: () => import( '../views/dashboard/dasmat/CreateDasmat.vue')
  },
  {
    path: '/restaurantdasmat/edit/:dasmatId',
    name: 'restaurantdasmatedit',
    component: () => import( '../views/dashboard/dasmat/EditDasmat.vue')
  },
  {
    path: '/restaurantdasmatdetails/:dasmatId',
    name: 'restaurantdasmatdetails',
    component: () => import( '../views/dasmat/DasmatDetails.vue')
  },
  {
    path: '/dashboard/home/edit/:dhomaId',
    name: 'dhomaedit',
    component: () => import( '../views/dashboard/home/EditDhoma.vue')
  },


  {
    path: '/dashboard/home/homeDashboard',
    name: 'dashboardhome',
    component: () => import( '../views/dashboard/home/homeDashboard.vue')
  },
 {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login/LoginView.vue')
  },
  {
    path:'/register',
    name:'register',
    component: () => import( '../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
