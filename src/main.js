/**************************************************************************
 * Imports
 **************************************************************************/

// NPM: Main Package
import Vue from 'vue'

// PROJECT: Main Files
import App from '@/App'
import router from '@/router'
import store from '@/store'
import RegisterComponents from '@/utils/registers'

// NPM: Dependency Packages
import dotenv from 'dotenv'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'

// Configure the module to load environment variables
dotenv.config()

// Install and use dependency packages
Vue.use(BootstrapVue)
Vue.use(RegisterComponents)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

/**************************************************************************
 * Vue Instance
 **************************************************************************/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
