import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// Export the cats states and mutation as module
const cats = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default cats
