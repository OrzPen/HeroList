import Vue from 'vue'
import App from './App.vue'

import "./assets/bootstrap/css/bootstrap.css" 
import "./assets/css/index.css"
import VueRouter from '../node_modules/vue-router/dist/vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
import HeroList from './views/heros/AppList.vue'
//导入装备和武器组件
import equips from './views/equips/equips.vue'
import weapons from './views/weapons/weapons.vue'
const router = new VueRouter ({
  routes : [
    {name : 'home' , path : '/' , redirect : {name:'heroes'}},
    {name : 'heroes' , path : '/heros' , component : HeroList},
    //配置武器和装备路由规则
    {name : 'equips' , path : '/equips' , component : equips},
    {name : 'weapons' , path : '/weapons' , component : weapons}
  ]
})
new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
