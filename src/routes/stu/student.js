export default { 
  name:"学生端",
  path:'/studentPort',
  component:()=>import('@/views/shop/layout'),
  children:[
    {
      // path:'/synthesizeDetection',
      path:'',
      name:"综合检测",
      component:()=>import('@/views/stu/synthesizeDetection/index.vue'),
    },
  ],

}