import Vue from 'vue'
import Vuex from 'vuex'

// Store Modules
import cats from './modules/cats'

// Global method to install or call plugins
Vue.use(Vuex)

/**************************************************************************
 * This function primarily use for state management
 ***************************************************************************/

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    namespaced: true,
    cats
  },
  strict: false
})

export default store
