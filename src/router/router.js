//webpack按需加载组件
const login = r => require(['../page/login'], r)
const index = r => require(['../page'], r)
const _404 = r => require(['../page/common/404'], r)
const empty = r => require(['../page/common/empty'], r)


//子路由
const children = [ {
    path:'', 
    redirect:'/map'
  }, 
  {
    path:'map', 
      component:r => require(['../page/map'], r), 
  },
]

// 配置路由
export default [ {
  path:'/login', 
  component:login
},  {
  path:'/', 
  component:index, 
  children:children, 
  meta: {
    requireAuth:true
  }
},  {
  path:'*', 
  component:_404
}, ]
