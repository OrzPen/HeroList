import Vue from 'vue'
import VueRouter from '../node_modules/vue-router/dist/vue-router'
Vue.use(VueRouter)

import HeroList from './views/heros/AppList.vue'
//导入装备和武器组件
import equips from './views/equips/equips.vue'
import weapons from './views/weapons/weapons.vue'
const router = new VueRouter ({
  //设置高亮显示默认类名
  linkActiveClass : 'active' ,
  //配置路由规则
  routes : [
    {name : 'home' , path : '/' , redirect : {name:'heroes'}},
    {name : 'heroes' , path : '/heros' , component : HeroList},
    //配置武器和装备路由规则
    {name : 'equips' , path : '/equips' , component : equips},
    {name : 'weapons' , path : '/weapons' , component : weapons}
  ]
})

export default router