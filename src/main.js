import Vue from 'vue'
import App from './App.vue'

import "./assets/bootstrap/css/bootstrap.css" 
import "./assets/css/index.css"
Vue.config.productionTip = false
import router from './router'

import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000"
Vue.prototype.axios = axios
new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
