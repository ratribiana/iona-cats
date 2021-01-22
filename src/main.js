/**************************************************************************
 * Imports
 **************************************************************************/

// NPM: Main Package
import Vue from 'vue'

// PROJECT: Main Files
import App from '@/App'
import router from '@/router'
import store from '@/store'

// NPM: Dependency Packages
import dotenv from 'dotenv'

// Configure the module to load environment variables
dotenv.config()

Vue.config.productionTip = false

/**************************************************************************
 * Vue Instance
 **************************************************************************/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
