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

    },
    mounted () {

    }
  }
</script>
