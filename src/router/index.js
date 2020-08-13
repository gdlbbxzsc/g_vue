import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import(/* webpackChunkName: "Welcome" */ '@/pages/Welcome')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "Login" */ '@/pages/Login')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "Main" */ '@/pages/main/Main'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "Home" */ '@/pages/main/components/Home')
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import(/* webpackChunkName: "Home" */ '@/pages/main/components/Mine')
        },
        {
          path: '*',
          redirect: 'mine'
        }
      ],
      redirect: 'login'
    },
    {
      path: '/main/*',
      redirect: 'login'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
