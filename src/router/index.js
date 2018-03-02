import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/containers/Home/Home.vue'
import Films from '@/components/containers/Films/Films.vue'
import Detail from '@/components/containers/Detail/Detail.vue'
import NotFound from '@/components/containers/NotFound/NotFound.vue'

import Second from '@/components/containers/Second/Second.vue'
import SecondOne from '@/components/containers/Second/SecondOne.vue'
import SecondTwo from '@/components/containers/Second/SecondTwo.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/films',
      name: 'Films',
      component: Films
    },
    {
      path: '/second',
      name: 'Second',
      component: Second,
      redirect: {name: 'SecondOne'},
      children: [
        {path: 'secondOne', name: 'SecondOne', component: SecondOne},
        {path: 'secondTwo', name: 'SecondTwo', component: SecondTwo}
      ]
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: '**',
      component: NotFound
    }
  ]
})
export default router
