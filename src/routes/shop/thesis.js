export default {
    name:'论文',
    path:'/thesis',
    component:()=>import('@/views/shop/layout'),
    children:[
        {
            path: 'listBySpec/:c/:m',
            name:'论文-专业',
            component: ()=>import('@/views/shop/listBySpec'),
        },
        {
            path: 'detail/:id',
            name:'论文-详情',
            component: ()=>import('@/views/shop/detail'),
        },
        {
            path: 'history',
            name:'浏览足迹',
            // 懒加载延迟加载
            component: ()=>import('@/views/shop/history'),
            meta:{  //路由的元数据——其中指定任意的数据
              title:'浏览足迹'
            }
          },
          {
            path: 'collect',
            name:'我的收藏',
            // 懒加载延迟加载
            component: ()=>import('@/views/shop/collect'),
            meta:{  //路由的元数据——其中指定任意的数据
              title:'我的收藏'
            },
            
          },
    
          {
            path: 'buy',
            name:'已购买模板',
            // 懒加载延迟加载
            component: () => import('@/views/shop/buy'),
            meta:{  //路由的元数据——其中指定任意的数据
              title:'已购买模板'
            }
          },
          {
            path: 'more',
            name:'更多专业',
            // 懒加载延迟加载
            component: () => import('@/views/shop/more'),
            meta:{  //路由的元数据——其中指定任意的数据
              title:'更多专业'
            }
          },

    ],
}