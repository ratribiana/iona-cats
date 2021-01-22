import $http from '../axios/http'

// API key of The Cat API
const API_KEY = process.env.VUE_APP_API_KEY

/**************************************************************************
 * Get breeds of the cats
 *
 * @return {Array} Array of Breeds
 ****************************************************************************/

const getCatBreeds = () => {
  const header = { 'x-api-key': API_KEY }

  // $http (url, data, method, header)
  return $http(`/v1/breeds`, null, 'GET', header)
}

/**************************************************************************
 * Get cats according to breeds
 *
 * @param {Number} page Page number for pagination
 * @param {Number} limit Number that will define how many records needs to return
 * @param {String} breedID ID of the breed with string data type (e.g abob, acur, abys)
 * @return {Array} Array of cats details
 ****************************************************************************/

const getCats = (page=1, limit=10, breedID) => {
  const header = { 'x-api-key': API_KEY }

  // $http (url, data, method, header)
  return $http(`/v1/images/search?page=${page}&limit=${limit}&breed_id=${breedID}`, null, 'GET', header)
}

/**************************************************************************
 * Get cat by id
 *
 * @return {Array} Array of Breeds
 ****************************************************************************/

const getCatByID = (catId) => {
  const header = { 'x-api-key': API_KEY }

  // $http (url, data, method, header)
  return $http(`/v1/images/${catId}`, null, 'GET', header)
}

// Export all functions
export {
  getCatBreeds,
  getCats,
  getCatByID
}
