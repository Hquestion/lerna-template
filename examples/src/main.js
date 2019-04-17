import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './assets/scss/app.scss';
import {Button} from '@sdx/ui';
import enMsg from  '@sdx/utils/src/locale/lang/en';

Vue.use(Button);

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');

app.$i18n.mergeLocaleMessage('en', enMsg);
