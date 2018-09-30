import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Hi from '@/components/Hi'
import 'iview/dist/styles/iview.css'
import iView from 'iview'
Vue.use(Router)
Vue.use(iView)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name:'HelloWorld',
      component: HelloWorld,
      props: route =>({
        food: route.query.food
      })
    },
    {
      path: '/dropdown',
      component: () => import('@/components/dropdown.vue')
    },
    {
      path: '/comp',
      component: () => import('@/view/myComputed.vue')
    },
    {
      path: '/stop',
      component: () => import('@/view/Stop.vue')
    },
    {
      path: '/store',
      component: () => import('@/view/store.vue')
    },
    // {
    //   path: '/select',
    //   component: () => import('@/view/Select.vue')
    // },
    {
      path:'/parent',
      name:'parent',
      component:() => import('@/components/Parent.vue'),
      children:[{
        path:'child',
        component:() => import('@/components/Child.vue'),
      }]
    },
    {
      path: '/Hi1',
      name:'Hi1',
      component: () => import('@/components/Hi1.vue')
    },
    {
      path: '/named_view/:name',
      component: ()=> import('@/components/Hi2.vue'),
      props:true
    }
  ]
})
