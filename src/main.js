import Vue from 'vue'
import app from './app.vue';
import './assets/styles/main.scss'
import { router } from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';


Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app),
}).$mount('#app')
