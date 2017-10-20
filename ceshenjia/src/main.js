// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './tracker/tracker'

Vue.config.productionTip = false

// 这里一定要用window全局调用
//window.NativeAPI = require('native-api')
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
