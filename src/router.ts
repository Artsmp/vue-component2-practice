import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import Layout from './components/layout/index.vue'
import IconSelect from './views/IconSelect.vue'

const routes: RouteRecordRaw[] = [
  {
    component: Layout,
    path: '/',
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'icon',
        component: IconSelect,
      },
    ],
  },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
