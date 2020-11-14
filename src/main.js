import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const Bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    Bus
  }
}).$mount('#app')

