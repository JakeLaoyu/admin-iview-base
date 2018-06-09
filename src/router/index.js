import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import { routers, appRouter } from './router'
import { toDefaultPage } from '@/libs/util.js'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/live/all'
    },
    ...routers
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  toDefaultPage([...appRouter], to.name, router, next)
})

router.afterEach((to) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
