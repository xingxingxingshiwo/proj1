import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '@/views/New.vue'
import Manage from '@/views/Manage.vue'
import Search from '@/views/Search.vue'

// import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // component: About
  },
  {
    path: '/new',
    name: 'new',
    component: New
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})
export default router

const M = {
  install (Vue) {
    Vue.component('Manage', M)
  }
}
