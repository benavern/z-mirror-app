import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Shopping from '@/components/Shopping/Shopping'
import NewShoppingItem from '@/components/Shopping/NewShoppingItem'
import Postit from '@/components/Postit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Home
    },
    {
      path: '/shopping',
      name: 'Liste de courses',
      component: Shopping,
      meta: {
        button: { link: '/shopping/new', icon: 'add' }
      }
    },
    {
      path: '/shopping/new',
      name: 'Ajouter à la liste',
      component: NewShoppingItem
    },
    {
      path: '/postit',
      name: 'Postits',
      component: Postit
    }
  ]
})
