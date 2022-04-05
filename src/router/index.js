import { createRouter, createWebHistory } from 'vue-router'





const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    name:'home',
    path:'/home',
    component:()=>import('../views/home/Home')
  },
  {
    name:'category',
    path:'/category',
    component:()=>import('../views/category/Category')
  },
  {
    name:'shopcart',
    path:'/shopcart',
    component:()=>import('../views/shopcart/Shopcart')
  },
  {
    name:'profile',
    path:'/profile',
    component:()=>import('../views/profile/Profile')
  },
  {
    name:'detail',
    path:'/detail',
    component:()=>import('../views/detail/Detail')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router