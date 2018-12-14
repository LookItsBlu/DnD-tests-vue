import Vue from 'vue'
import App from './App.vue'
import router from './routes'

// pour tester vue2-dragula:
// * decommenter cet import
// * decommenter le contenue du lifecycle hook "created" dans dragula.vue
// * toujours dans dragula.vue, renommer l'attribut "bag" par "drake"
// import { Vue2Dragula } from 'vue2-dragula'
// Vue.use(Vue2Dragula)

import * as VueDragula from 'vue-dragula'

Vue.use(VueDragula)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
