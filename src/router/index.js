import { createRouter, createWebHashHistory } from 'vue-router'
const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const Profile=()=>import('@/views/profile/Profile')
const ShopCart=()=>import('@/views/shopCart/ShopCart')
const Popular=()=>import('@/components/common/popular/Popular')
const NewPattern=()=>import('@/components/common/newpattern/NewPattern')
const Selected=()=>import('@/components/common/selected/Selected')

const routes = [
  {path:'',redirect:'/home'},
  {path:'/home',
    component:Home,
    redirect:'/home/popular',
    children:[
      {
        path:'/home/popular',
        name:'Popular',
        component:Popular
      },
      {
        path:'/home/newpattern',
        name:'NewPattern',
        component:NewPattern
      },
      {
        path:'/home/selected',
        name:'Selected',
        component:Selected
      }
    ]
  },
  {path:'/category',component:Category},
  {path:'/profile',component:Profile},
  {path:'/shopCart',component:ShopCart}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to,from,next)=>{
//   document.title=to.matched[0].meta.title
//   next()
// })

router.afterEach((to,from)=>{
  document.title=to.matched[0].meta.title
})

export default router
