import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProblemList from '@/views/ProblemList.vue'
import ProblemDetail from '@/views/ProblemDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/problemList',
    name: 'ProblemList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProblemList // () => import(/* webpackChunkName: "about" */ '../views/ProblemList.vue')
  },
  {
    path: '/problemDetail',
    name: 'ProblemDetail',
    component: ProblemDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
