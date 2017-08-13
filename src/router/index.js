import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Shopping from '@/components/Shopping'
import Postit from '@/components/Postit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/postit',
      name: 'Postit',
      component: Postit
    }
  ]
})
