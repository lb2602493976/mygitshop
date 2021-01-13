import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/shop/layout/index.vue'
import stuRoutes from '@/routes/stu/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/stu/layout/index.vue'),
    children:[{
      path: '',
      name: '学生端首页',
      component:() => import('@/views/stu/home/index.vue'),
      children:[
        {
          path: 'test',
          name: '我要检测',
          component:() => import('@/views/stu/test/index.vue'),
        },
        {
          path: 'report',
          name: '检测报告',
          component:() => import('@/views/stu/report/index.vue'),
        },
        // {
        //   path: 'integral',
        //   name: '我的积分',
        //   component:() => import('@/views/stu/integral/index.vue'),
        // },
        {
          path: 'thesis',
          name: '论文设置',
          component:() => import('@/views/stu/thesis/index.vue'),
        },
        // {
        //   path: 'account',
        //   name: '账号管理',
        //   component:() => import('@/views/stu/account/index.vue'),
        // },
        {
          path: 'template',
          name: '模板提交记录',
          component:() => import('@/views/stu/template/index.vue'),
        },
        {
          path: 'history',
          name: '历史检测记录',
          component:() => import('@/views/stu/history/index.vue'),
        },
        {
          path: 'testReport',
          name: '分享检测报告',
          component:() => import('@/views/stu/testReport/index.vue'),
        },
      ]
      }
    ]
  },
  ...stuRoutes,
]

const router = new VueRouter({
  routes,
})

export default router
