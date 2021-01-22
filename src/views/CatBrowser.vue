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
      }
    },
    methods: {
      getCatBreeds () {
        // Dispatch cat breeds action to fetch the data from API endpoint
        this.$store.dispatch('cats/GET_CAT_BREEDS')
      }
    },
    mounted () {
      // Assigned route name as the title of the page
      this.title = this.$route.name
      this.getCatBreeds()
    }
  }
</script>
