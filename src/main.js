import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

import '@/assets/js/egg.js'

// css
import '@/assets/scss/reset.css'
import '@/assets/scss/style.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
