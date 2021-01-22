// Initial value of state of cats
const state = {
  loading: false,
  success: false,
  error: false,
  catsLoading: false,
  catsLoadedOnce: false,
  catsSuccess: false,
  catsError: false,
  catBreedLoading: false,
  catBreedSuccess: false,
  catBreedError: false,
  currentBreedID: null,
  cat: {},
  catList: [],
  catBreeds: [],
  catListReachEndList: false
}

export default state
