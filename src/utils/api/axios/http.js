import axios from 'axios'

// API url based on the environment
const API_URL = `${process.env.VUE_APP_API_PROTOCOL}://${process.env.VUE_APP_API_HOST}`

/**************************************************************************
 * API request Utility
 *
 * @param {String} url Url endpoint of the API.
 * @param {Object} data Data being submitted to API endpoint.
 * @param {String} method HTTP methods to use (POST, GET, PUT, DELETE, PATCH).
 * @param {Object} header Custom header depend on the API requirements.
 * @return {Promise}
 ****************************************************************************/

const $http = (url, data, method, header=null) => new Promise((resolve, reject) => {
  let trimUrl = url.substr(1)
  let apiUrl = `${API_URL}/${trimUrl}`

  // Options that will pass to HTTP call functions
  let options = { url: apiUrl, data: data, method: method }

  if (header !== null) {
    options.headers = header
  }

  // Promised based HTTP call
  axios(options)
    .then(resp => {
      // Handle success
      resolve(resp)
    })
    .catch(err => {
      // Handle error
      reject(err)
    })
})

export default $http
