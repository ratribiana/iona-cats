// All mutations for cats
const mutations = {
  CAT_BREEDS_INITIATE_REQUEST: (state) => {
    state.catBreedLoading = true
    state.catBreedSuccess = false
    state.catBreedError = false
  },
  CAT_BREEDS_REQUEST_SUCCESS: (state, data) => {
    state.catBreedLoading = false
    state.catBreedSuccess = true
    state.catBreedError = false
    state.catBreeds = data
  },
  CAT_BREEDS_REQUEST_FAILED: (state) => {
    state.catBreedLoading = false
    state.catBreedSuccess = false
    state.catBreedError = true
  },
  CATS_INITIATE_REQUEST: (state) => {
    state.catsLoading = true
    state.catsSuccess = false
    state.catsError = false
  },
  CATS_REQUEST_SUCCESS: (state, data) => {
    state.catsLoading = false
    state.catsLoadedOnce = true
    state.catsSuccess = true
    state.catsError = false
    state.catList = data
  },
  CATS_REQUEST_FAILED: (state) => {
    state.catsLoading = false
    state.catsSuccess = false
    state.catsError = true
  },
  CATS_UPDATE_REACH_END_LIST: (state) => {
    state.catListReachEndList = true
    state.catsLoading = false
    state.catsSuccess = true
    state.catsError = false
  },
  CATS_RESET_REACH_END_LIST: (state) => {
    state.catListReachEndList = false
    state.catsLoading = false
    state.catsSuccess = true
    state.catsError = false
  },
  CAT_INITIATE_REQUEST: (state) => {
    state.loading = true
    state.success = false
    state.error = false
  },
  CAT_REQUEST_SUCCESS: (state, data) => {
    state.loading = false
    state.success = true
    state.error = false
    state.cat = data
  },
  CAT_REQUEST_FAILED: (state) => {
    state.loading = false
    state.success = false
    state.error = true
  },
  SET_CURRENT_BREED_ID: (state, breedID) => {
    state.currentBreedID = breedID
  },
  RESET_DATA: (state) =>{
    state.loading = false
    state.success = false
    state.error = false
    state.catsLoading = false
    state.catsSuccess = false
    state.catsError = false
    state.catBreedLoading = false
    state.catBreedSuccess = false
    state.catBreedError = false
    state.catList = []
  }
}

export default mutations
