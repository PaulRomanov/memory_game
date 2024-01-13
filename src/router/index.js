import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../pages/StartPage'

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
