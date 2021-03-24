import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Favorites from '../views/Favorites';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favoritos',
    name: 'Favorites',
    component: Favorites
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
