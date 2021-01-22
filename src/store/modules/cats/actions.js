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

    commit('CATS_INITIATE_REQUEST')

    // Return promise from the HTTP call
    return new Promise((resolve, reject) => {
      return getCats(page, limit, breedID)
        .then(response => {
          if (response && response.data) {
            // Get the response data for cats
            const catList = response.data

            commit('CATS_REQUEST_SUCCESS', catList)


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
