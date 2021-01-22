import Vue from 'vue'
import { getCats, getCatBreeds, getCatByID } from 'utils/api/requests/cats'

/**************************************************************************
 * Collection of committed mutations for cats
 ***************************************************************************/

const actions = {
 // Get cat breeds action
 GET_CAT_BREEDS: ({ commit }) => {
   // Update the value of state from initial state to pending
   commit('CAT_BREEDS_INITIATE_REQUEST')

   // Return promise from the HTTP call
   return new Promise((resolve, reject) => {
     return getCatBreeds()
       .then(response => {
         if (response && response.data) {
           // Store the date to state
           commit('CAT_BREEDS_REQUEST_SUCCESS', response.data)
           // Return the data
           resolve(response.data)
         } else {
           // Tall the mutation that there is no response from the API
           commit('CAT_BREEDS_REQUEST_FAILED')
         }
       })
       .catch(err => {
         // Handle errors when request is failed or there are error in the logic of the above code
         commit('CAT_REQUEST_FAILED')
         reject(err)
       })
   })
 },

 // Get cat based on page number, limit and breed
 GET_CATS: ({ commit, state }, { page, limit, breedID }) => {
    /********************************************************************************
     * Update the value of state from initial state to pending.
     * Checked if the cats objects is not already loaded and the current breed ID
     * is not the same as the previous request to enable the loading on screen/view
     ********************************************************************************/
    if (!state.catsLoadedOnce || breedID != state.currentBreedID) {
      commit('CATS_INITIATE_REQUEST')
    }

    // Return promise from the HTTP call
    return new Promise((resolve, reject) => {
      return getCats(page, limit, breedID)
        .then(response => {
          if (response && response.data) {
            // Get the response data for cats
            const catList = response.data

            // Get the cats from the store (state)
            const catListInStore = state.catList

            // Filter the cats object in store and get all only the cat IDs and put in on array
            const filteredCatListInStore = catListInStore.map( cat => cat.id)

            // Get all cats from the response and filter it. Compare it to all the cat IDs in filtered cats in store
            const filteredCats = catList.filter( cat => !filteredCatListInStore.includes(cat.id) )

            /*********************************************************************************
             * If there is no cat filtered meaning all of the cats from the response is
             * already in the store. The code below tell that all the cats are already returned
             * from the API using the same breed ID
             *********************************************************************************/
            if (filteredCats.length === 0 && breedID === state.currentBreedID) {
              commit('CATS_UPDATE_REACH_END_LIST')
            } else if (filteredCats.length > 0 && breedID === state.currentBreedID) {
              // If there are still cats returened from the filtering, it will just append or merge to current cats in the store
              const mergedCatList = catListInStore.concat(filteredCats)
              commit('CATS_REQUEST_SUCCESS', mergedCatList)
              commit('CATS_RESET_REACH_END_LIST')
            } else {
              // this line is used for the first request of the cat list
              commit('CATS_REQUEST_SUCCESS', catList)
              commit('CATS_RESET_REACH_END_LIST')
            }

            // Set the current breed ID so it can use for comparison later
            commit('SET_CURRENT_BREED_ID', breedID)

            // Return the data
            resolve(response.data)
          } else {
            // Tall the mutation that there is no response from the API
            commit('CATS_REQUEST_FAILED')
          }
        })
        .catch(err => {
          // Handle errors when request is failed or there are error in the logic of the above code
          commit('CAT_REQUEST_FAILED')
          reject(err)
        })
    })
  },

 // Get cat based on catID
 GET_CAT_BY_ID: ({ commit }, catID) => {
    // Update the value of state from initial state to pending
    commit('CAT_INITIATE_REQUEST')

    // Return promise from the HTTP call
    return new Promise((resolve, reject) => {
      return getCatByID(catID)
        .then(response => {
          if (response && response.data) {
            // Store the date to state
            commit('CAT_REQUEST_SUCCESS', response.data)
            // Return the data
            resolve(response.data)
          } else {
            // Tall the mutation that there is no response from the API
            commit('CAT_REQUEST_FAILED')
          }
        })
        .catch(err => {
          // Handle errors when request is failed or there are error in the logic of the above code
          commit('CAT_REQUEST_FAILED')
          reject(err)
        })
    })
  },
}

export default actions
