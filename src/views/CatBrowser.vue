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
      }
    },
    mounted () {
      // Assigned route name as the title of the page
      this.title = this.$route.name
    }
  }
</script>
