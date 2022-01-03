import Vue from 'vue';
import App from './App.vue';
import { text, message } from './draft';
import alertText from './data';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alertText(text);
alertText(message);
