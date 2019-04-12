import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import IluvatarUI from '../../packages/ui';

Vue.use(IluvatarUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
