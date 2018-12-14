import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import { Vue2Dragula } from 'vue2-dragula'

Vue.use(Vue2Dragula)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
