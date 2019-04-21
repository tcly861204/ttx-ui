import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import TTx from '../src/main';
Vue.use(VueRouter);
Vue.use(TTx);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    esModule: false,
    mode: 'hash',
    routes: [
        {
            path: '/button',
            component: (resolve) => require(['./routers/button.vue'], resolve)
        }
    ]
});
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');