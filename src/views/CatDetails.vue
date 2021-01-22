<template>
  <!-- Page content -->
  <div class="container">
    <div class="cat row justify-content-center mt-5">
      <div class="container bg-secondary border-0 m-0 p-0">
        <div class="card">
          <div class="card-header">
            <a class="btn btn-primary" :href="`/?breed=${cat.breedID}`">Back</a>
          </div>
          <img class="card-img" :src="cat.url">
          <div class="card-body">
            <h4>{{ cat.name }}</h4>
            <h5>Origin: {{ cat.origin }}</h5>
            <h6>{{ cat.temperament }}</h6>
            <p>{{ cat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**************************************************************************
 * View for cat details
 ***************************************************************************/
  export default {
    name: 'CatDetails',
    data () {
      return {
        cat: {
          url: '',
          breedID: '',
          name: '',
          origin: '',
          temperament: '',
          description: '',
        }
      }
    },
    methods: {
      getCat (catID) {
        // Get list of cats from store
        const catList = this.$store.state.cats.catList

        // Check if catList has value or there are objects assigned to catList
        if (catList.length > 0) {
          const cat = catList.filter( cat => {
            return cat.id === catID
          })

          // if there are objects assigned, put it to the cat variable
          if (cat && cat.length > 0) {
            this.cat = {
              url: cat[0].url,
              breedID: 'breeds' in cat[0] && cat[0].breeds.length > 0 ? cat[0].breeds[0].id : '',
              name: 'breeds' in cat[0] && cat[0].breeds.length > 0 ? cat[0].breeds[0].name : '',
              origin: 'breeds' in cat[0] && cat[0].breeds.length > 0 ? cat[0].breeds[0].origin : '',
              temperament: 'breeds' in cat[0] && cat[0].breeds.length > 0 ? cat[0].breeds[0].temperament : '',
              description: 'breeds' in cat[0] && cat[0].breeds.length > 0 ? cat[0].breeds[0].description : ''
            }
          }
        } else {
          // iF there are NO objects assigned to catList in store, dispatch an action for getting the cat info using
          this.$store.dispatch('cats/GET_CAT_BY_ID', catID)
            .then((response) => {
              const catFromAPI = this.$store.state.cats.cat

              // Check if cat from store has value
              if (catFromAPI && Object.keys(catFromAPI).length > 0) {
                // if yes, assign the value of cat from the store
                this.cat = {
                  url: catFromAPI.url,
                  breedID: 'breeds' in catFromAPI && catFromAPI.breeds.length > 0 ? catFromAPI.breeds[0].id : '',
                  name: 'breeds' in catFromAPI && catFromAPI.breeds.length > 0 ? catFromAPI.breeds[0].name : '',
                  origin: 'breeds' in catFromAPI && catFromAPI.breeds.length > 0 ? catFromAPI.breeds[0].origin : '',
                  temperament: 'breeds' in catFromAPI && catFromAPI.breeds.length > 0 ? catFromAPI.breeds[0].temperament : '',
                  description: 'breeds' in catFromAPI && catFromAPI.breeds.length > 0 ? catFromAPI.breeds[0].description : ''
                }
              }
            }).catch( err => {
              // Handle error. There is an error from the return of the cats API or the status code is 400
              this.$swal({
                title: 'Warning from Cats!',
                text: 'Apologies but we could not load new cats for you at this time! Miau!',
                type: 'info',
                showCancelButton: false,
                confirmButtonClass: 'btn btn-danger pr-5 pl-5',
                reverseButtons: true,
                confirmButtonText: 'Ok!'
              }).then(response => {
                this.$router.push({ path: '/' })
              })
            })
        }
      }
    },
    mounted () {
      // Call the methods that will dispatch an action for getting cat Data when the page is mounted
      this.getCat(this.$route.params.catID)
    }
  }
</script>
