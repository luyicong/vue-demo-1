import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Index'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about/:name/detail/:type',
      name: 'About',
      component: About
    }
  ]
})
