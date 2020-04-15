// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入reset.css
import './assets/styles/reset.css'
import './assets/styles/border.css'

// 导入fastclick
import fastClick from 'fastclick'


Vue.config.productionTip = false

// 将fastclick绑定到body上
fastClick.attach(document.body)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
