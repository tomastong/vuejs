import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import StartView from '../views/StartView'
import FirstView from '../views/FirstView'
import SecondView from '../views/SecondView'

// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages'
      
    },{
        path: '/pages',
        component: PagesView,
        children: [
            {
                path: '',
                redirect: '/pages/start'
            },
            {
                path: 'start',
                name: 'StartView',
                component: StartView
            },
            {
                path: 'first',
                name: 'FirstView',
                component: FirstView
            },
            {
                path: 'second',
                name: 'SecondView',
                component: SecondView
            }
        ]
    }
  ]
})
