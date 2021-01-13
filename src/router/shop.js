import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/shop/layout/index.vue'
import shopRoutes from '@/routes/shop'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children:[
      {
        path:'',
        name:'首页',
        component:() => import('@/views/shop/home/index.vue'),
      }, 
    ],
  },
  ...shopRoutes,
]


const router = new VueRouter({
  routes,
})  

export default router
