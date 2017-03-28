// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'Vuex'
import App from './App'
import router from './router'
Vue.use(Vuex)
Vue.config.productionTip = false
let store = new Vuex.Store({})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
