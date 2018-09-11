import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import services from './common/service'; // 所有请求的合集
import tools from './common/tools'; // 所有工具的合集

Vue.use(ElementUI);
Vue.config.productionTip = false;
// 将全局方法和请求添加到对象属性上
Vue.prototype._services = services;
Vue.prototype.tools = tools;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
