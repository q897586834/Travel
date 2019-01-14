import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import City from '@/components/City/City'
import Detail from '@/components/detail/Detail'
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
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    }
  ]
})
