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
    path: '/foods',
    name: 'foods',
    component: () => import( '../views/FoodsView.vue')
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
    component: () => import( '../views/dashboard/Dashboard.vue'),
    meta: { requiresAdmin: true }
  },

  {
    path: '/dashboard/home',
    name: 'dashboardhomee',
    component: () => import( '../views/dashboard/home/homeDashboard.vue'),
    meta: { requiresAdmin: true }
  },
  {
    path: '/dashboard/home/Home',
    name: 'dashboardhomeee',
    component: () => import( '../views/dashboard/home/Home.vue'),
    meta: { requiresAdmin: true }
  },

  {
    path: '/dashboard/about',
    name: 'dashboardabout',
    component: () => import( '../views/dashboard/about/About.vue'),
    meta: { requiresAdmin: true }
  },

  {
    path: '/dashboard/aktivitete',
    name: 'dashboardaktivitete',
    component: () => import( '../views/dashboard/aktivitetet/Aktivitetet.vue'),
    meta: { requiresAdmin: true }

  },


   {
    path: '/dashboard/foods',
    name: 'FoodDashboard',
    component: () => import( '../views/dashboard/foods/FoodDashboard.vue'),
    meta: { requiresAdmin: true }
  },
     {
    path: '/dashboard/foods/create',
    name: 'FoodCreate',
    component: () => import( '../views/dashboard/foods/Foods.vue'),
    meta: { requiresAdmin: true }
  },
   {
    path: '/dashboard/foods/edit/:foodId',
    name: 'FoodEdit',
    component: () => import( '../views/dashboard/foods/FoodEdit.vue'),
    meta: { requiresAdmin: true }
  },



  {
    path: '/dashboard/dasmat',
    name: 'dashboarddasmat',
    component: () => import( '../views/dashboard/dasmat/Dasmat.vue'),
    meta: { requiresAdmin: true }
  },

  {
    path: '/dashboard/contact',
    name: 'dashboardcontact',
    component: () => import( '../views/dashboard/contact/Contact.vue'),
    meta: { requiresAdmin: true }
  },

  {
    path: '/dashboard/register',
    name: 'dashboardregister',
    component: () => import( '../views/dashboard/register/Register.vue'),
    meta: { requiresAdmin: true }
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
    path: '/dashboard/rezervimidhomes/create',
    name: 'dashboardrezervimi',
    component: () => import( '../views/dashboard/rezervimi/RezervimiDhoma.vue')
  },
   {
    path: '/dashboard/menute/create',
    name: 'menuteCreate',
    component: () => import( '../views/dashboard/menute/MenuCreate.vue')
  },
  {
    path: '/dashboard/events',
    name: 'eventsDashboard',
    component: () => import( '../views/dashboard/events/EventsDashboard.vue')
  },
  {
    path: '/dashboard/events/create',
    name: 'eventsCreate',
    component: () => import( '../views/dashboard/events/CreateEvents.vue')
  },
    {
    path: '/dashboard/menute',
    name: 'menuDashboard',
    component: () => import( '../views/dashboard/menute/MenuDashboard.vue')
  },
   {
    path: '/dashboard/menute/edit/:menuId',
    name: 'menuteEdit',
    component: () => import( '../views/dashboard/menute/MenuEdit.vue')
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    // check if user is admin
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userRole = userData ? userData.userRole : null;

    if (userRole === "Admin") {
      next()
    } else {
      next('/login') // redirect to login page if user is not admin
    }
  } else {
    next()
  }
})

export default router
