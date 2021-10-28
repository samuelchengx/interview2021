import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
import ajax from './config/ajax'
import './style/common'
import './config/rem'
import App from "./App";

Vue.use(VueRouter)
// const router = new VueRouter({
// 	routes
// })

new Vue({
  name: 'root',
  router,
	store,
  render: h => h(App)
}).$mount('#app')
