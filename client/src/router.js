import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import QAAdmin from '@/components/QAAdmin'
import QAOther from '@/components/QAOther'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/qaa',
      name: 'qaadmiin',
      component: QAAdmin
    },

    {
      path: '/qao',
      name: 'qaother',
      component: QAOther
    },


    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
