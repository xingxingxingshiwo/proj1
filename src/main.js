import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Manage from './views/Manage'
Vue.config.productionTip = false
Vue.use(Manage)
require('./mock.js')
// eslint-disable-next-line no-new
// new Vue({ el: '#app', router, render: h => h(App) })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
