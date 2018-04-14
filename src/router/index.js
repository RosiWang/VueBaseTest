import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueCompt from '@/components/VueCompt'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Hello Rosi',
      component: HelloWorld
    },
    {
      path:'/vueTest',
      name:'vue test',
      component:vueCompt
    }
  ]
})
