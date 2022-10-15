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
]

const router = createRouter({
    routes, // 映射关系
    history:createWebHashHistory()
})

export default router