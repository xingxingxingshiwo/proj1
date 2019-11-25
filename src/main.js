import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
require('./mock.js')
// eslint-disable-next-line no-new
// new Vue({ el: '#app', router, render: h => h(App) })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
