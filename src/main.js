import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import { VueSpinners } from '@saeris/vue-spinners';
import { dollarFilter, percentFilter } from '@/filters';

Vue.use(VueSpinners);
Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);

Vue.config.productionTip = false;
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
