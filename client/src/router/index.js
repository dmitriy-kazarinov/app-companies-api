import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Company from '@/components/Company'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/company/:id',
      name: 'company',
      component: Company
    }
  ],
  linkActiveClass: 'is-active'
})
