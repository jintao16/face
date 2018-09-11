import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/login.vue';
import Main from './views/main.vue';

Vue.use(Router);

// 不添加mode为history的话，路由方式是加#，导致不能立刻跳转，后面切成多页面的形式的时候会报错的
let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: '登录',
            component: Login
        },
        {
            path: '/main',
            name: 'main',
            redirect: '/main/index',
            component: Main,
            children: [
                {
                    path: 'index',
                    name: '首页',
                    component: () => import('./views/index.vue')
                },
                {
                    path: 'channel',
                    name: '实时监控',
                    component: () => import('./views/channel.vue')
                },
                {
                    path: 'faceLibQuery',
                    name: '人像库检索',
                    component: () => import('./views/faceLibQuery.vue')
                }
            ]
        },
        {
            path: '*',
            name: '404notFound',
            component: () => import('./components/404.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.name) {
        document.title = to.name;
    }
    next();
});

export default router;
