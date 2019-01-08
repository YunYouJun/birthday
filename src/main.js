import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

// import '@/assets/js/bubble.js'
import '@/assets/js/egg.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
