import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import TTx from '../src/main';
Vue.use(VueRouter);
Vue.use(TTx);
// 开启debug模式
Vue.config.debug = false;
// 路由配置
const router = new VueRouter({
    esModule: false,
    mode: 'hash',
    routes: [
        {
          path: '/',
          name: 'home',
          meta: {
            hideInMenu: true,
            title: 'home',
            notCache: true
          },
          component: () => import(/* webpackChunkName: "home" */ '@/home.vue')
        },
        {
          path: '/install',
          name: 'install',
          meta: {
              hideInMenu: true,
              title: '安装',
              notCache: true
          },
          component: () => import(/* webpackChunkName: "install" */ '@/install.vue')
        },
        {
            path: '/button',
            name: 'button',
            meta: {
                hideInMenu: true,
                title: '按钮',
                notCache: true
            },
            component: () => import(/* webpackChunkName: "button" */ '@/button.vue')
        },
        {
            path: '/notify',
            name: 'notify',
            meta: {
                hideInMenu: true,
                title: '消息',
                notCache: true
            },
            component: () => import(/* webpackChunkName: "notify" */ '@/notify.vue')
        }
    ]
});
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');