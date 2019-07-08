import Vue from 'vue'
import App from './App.vue'

import "./assets/bootstrap/css/bootstrap.css" 
import "./assets/css/index.css"
Vue.config.productionTip = false
import router from './router'
new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
