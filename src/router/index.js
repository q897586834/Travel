import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import City from '@/components/City/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/city',
      name:'City',
      component:City,
    }
  ]
})
