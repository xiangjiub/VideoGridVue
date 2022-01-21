import { RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '/@/views/Xindex.vue'),
        meta: {
            title: '首页',
            top: false,
            leftAction: false
        },
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes:[...routes]
})


export default router;