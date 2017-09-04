import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Toast from '@/components/Login'
import List from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/',
      name: 'List',
      component: List
    },

  ]
})
