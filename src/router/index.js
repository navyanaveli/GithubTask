import Vue from 'vue'
import VueRouter from 'vue-router'
import StalkPage from "@/views/StalkPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Stalk Page',
    component: StalkPage
  },
  {
    path: '/userDetails/:user',
    name: 'UserDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
