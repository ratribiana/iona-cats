/**************************************************************************
 * Register all your packages here to use any component of your app
 **************************************************************************/

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import VueLoadingButton from 'vue-loading-button'

var plugins = {
 'pulse-loader': PulseLoader,
 'scale-loader': ScaleLoader,
 'clip-loader': ClipLoader,
 'bounce-loader' : BounceLoader,
 'VueLoadingButton': VueLoadingButton
}

/// registers all the components
const registers = {
  install (Vue, options) {
    for (var key in plugins) {
      Vue.component(key, plugins[key])
    }
  }
}

export default registers
