import { createRouter,createWebHashHistory } from "vue-router";

const  routes = [
    {
        path:'/',
        redirect: "/home"
    },
    {
        name:'home',
        path:'/home',
        component: () => import("../views/home/home.vue") 
    },
    {
        name:'favor',
        path:'/favor',
        component: () => import("../views/favor/favor.vue") 
    },
    {
        name:'message',
        path:'/message',
        component: () => import("../views/message/message.vue") 
    },
    {
        name:'order',
        path:'/order',
        component: () =>  import("../views/order/order.vue") 
    },
    {
        name:'city',
        path:'/city',
        component: () =>  import("../views/city/city.vue"),
        meta:{
            hideTabbar:true
        } 
    },
    {
        name:'search',
        path:'/search',
        component: () =>  import("../views/search/search.vue"),
        meta:{
            hideTabbar:true
        } 
    },
    {
        name:'detail',
        path:'/detail/:id',
        component: () =>  import("../views/detail/detail.vue"),
        meta:{
            hideTabbar:true
        } 
    },
]

const router = createRouter({
    routes, // 映射关系
    history:createWebHashHistory()
})

export default router