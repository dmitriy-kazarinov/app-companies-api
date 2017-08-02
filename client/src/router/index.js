import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Company from '@/components/Company'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/company/:id',
      name: 'company',
      component: Company
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ],
  linkActiveClass: 'is-active'
})
