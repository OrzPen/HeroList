import Vue from 'vue'
import App from './App.vue'

import "./assets/bootstrap/css/bootstrap.css" 
import "./assets/css/index.css"
import VueRouter from '../node_modules/vue-router/dist/vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
import HeroList from './views/heros/AppList.vue'
const router = new VueRouter ({
  routes : [
    {name : 'home' , path : '/' , redirect : {name:'heroes'}},
    {name : 'heroes' , path : '/heros' , component : HeroList}
  ]
})
new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
