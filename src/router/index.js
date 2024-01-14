import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../pages/StartPage'
import GamePage from '../pages/GamePage'

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/GamePage',
    name: 'GamePage',
    component: GamePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
