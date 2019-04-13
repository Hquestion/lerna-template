import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './assets/scss/app.scss';
import IluvatarUI from '../../packages/ui';
import '../../packages/ui/lib/theme/index.scss';
import enMsg from  '../../packages/ui/lib/utils/locale/lang/en';

Vue.use(IluvatarUI);

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');

app.$i18n.mergeLocaleMessage('en', enMsg);
