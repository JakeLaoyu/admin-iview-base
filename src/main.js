// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import iView from 'iview'
import '@/theme/variables.less'
import '@/theme/iconfont.css'
import bcComponents from '@/components'

Vue.use(iView)

Object.keys(bcComponents).forEach(key => {
  Vue.component(`Bc${key}`, bcComponents[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
