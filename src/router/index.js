import Vue from 'vue'
import VueRouter from 'vue-router'
import CompInicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'inicio', component: CompInicio }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
