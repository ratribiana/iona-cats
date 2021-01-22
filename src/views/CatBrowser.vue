<template>
  <div id="catBrowser">
    <!-- Page content -->
    <div class="container">
      <div class="content row justify-content-center">
        <div class="container bg-secondary border-0 mb-0 p-3 px-5">
          <h1>{{ title }}</h1>
          <div class="row pt-4">
            <div class="col-lg-3 col-md-3 col-sm-12">
              <label class="w-100 form-control-label" for="role">Select Breed </label>
              <b-form-select
                name="breed"
                v-model="breed"
                :options="breeds"
                :disabled="catBreedLoading"
                @change="getCats(page, limit, $event)"
                class="form-control custom-select"
              >
              </b-form-select>
            </div>
          </div>
          <div class="row pt-4 px-0" v-if="catList.length > 0 && !catsLoading">
            <div class="col-lg-12 col-md-12 col-sm-12 px-0">
              <div v-for="(cat, index) in catList" :key="index" class="item-container col-lg-3 col-md-3 col-sm-12 mb-4">
                <div class="cat-item">
                  <div class="cat-item-image">
                    <img :src="cat.url" >
                  </div>
                  <div class="cat-item-button-details text-center">
                    <router-link :to="`/${cat.id}`" exact class="btn btn-primary opacity-8 text-white w-100" > View details</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="breed !== null && catsLoading" class="row pt-4 px-0">
            <div class="col-lg-12 text-center">
              <pulse-loader :color="'#3867d6'"></pulse-loader>
            </div>
          </div>
          <div class="row pt-4">
            <div class="col-lg-3 col-md-3 col-sm-12">
             <VueLoadingButton
                  v-if="showLoadMoreButton"
                  :disbaled="catList.length === 0 && 'disabled'"
                  @click.native="loadMoreCats"
                  :class= "{'disabled': catList.length === 0} "
                  :loading=" catsLoading"
                  class="btn btn-success"
                  aria-label="Load more"
              >Load more</VueLoadingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**************************************************************************
 * View for cat browser - default page view
 ***************************************************************************/
  export default {
    name: 'CatBrowser',
    data () {
      return {
        title: '',
        breed: null,
        catList: [],
        page: 1,
        limit: 10
      }
    },
    computed: {
      catBreedLoading () {
        // Loading state for cat breeds
        return this.$store.state.cats.catBreedLoading
      },
      catsLoading: {
        // Loading state for cats
        get: function () {
          return this.$store.state.cats.catsLoading
        },
        set: function (newValue) {
          return newValue
        }
      },
      breeds () {
        // Computed property for cat breeds (reactive)
        let data = []

        // Reconstruct to array of object to be used in select options
        this.breedList.map(breed => {
          data.push({ value: breed.id, text: breed.name })
        })

        return [
          { value: null, text: 'Please select cat breed', disabled: true },
          ...data
        ]
      },
      breedList: {
        // list of breeds that came from store
        get: function () {
          return this.$store.state.cats.catBreeds || { value: null, text: 'Please select cat breed', disabled: true }
        },
        set: function (newValue) {
          return newValue
        }
      },
      showLoadMoreButton: {
        // Checking if the end of the list of the cats is already reached
        get: function () {
          return !this.$store.state.cats.catListReachEndList
        },
        set: function (newValue) {
          return newValue
        }
      }
    },
    methods: {
      getCatBreeds () {
        // Dispatch cat breeds action to fetch the data from API endpoint
        this.$store.dispatch('cats/GET_CAT_BREEDS')
      },
      getCats (page, limit, breedID) {
        // Assign the current breed ID so it can use for load more functionality
        this.breed = breedID
        // Dispatch cats action to fetch the cat info from API endpoint
        this.$store.dispatch('cats/GET_CATS', { page, limit, breedID })
          .then((response) => {
            this.catList = this.$store.state.cats.catList
          }).catch((err) => {
            // Handle error. There is an error from the return of the cats API or the status code is 400
            this.$swal({
              title: 'Warning from Cats!',
              text: 'Apologies but we could not load new cats for you at this time! Miau!',
              type: 'info',
              showCancelButton: false,
              confirmButtonClass: 'btn btn-danger pr-5 pl-5',
              reverseButtons: true,
              confirmButtonText: 'Ok!'
            })
          })
      },
      loadMoreCats () {
        this.catsLoading = true
        this.page += 1
        this.getCats(this.page, this.limit, this.breed)
      }
    },
    mounted () {
      // Assigned route name as the title of the page
      this.title = this.$route.name

      /***************************************************************************
       * Call the methods that will dispatch an action for getting the cat data
       * if there is a query parameter for breed when the page is mounted
       ***************************************************************************/
      if (Object.keys(this.$route.query).length > 0 && 'breed' in this.$route.query) {
        this.breed = this.$route.query.breed || null
        this.getCatBreeds()
        this.getCats(this.page, this.limit, this.$route.query.breed)
      } else {
        // if no query parameter for breed load the list of cat breeds
        this.getCatBreeds()
      }
    }
  }
</script>
