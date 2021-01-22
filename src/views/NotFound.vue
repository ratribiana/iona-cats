<template>
  <div>
    <!-- Header -->
    <div class="header bg-kitten py-7 py-lg-10 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-light">Ooops!</h1>
              <p class="text-lead text-white">Page not found. Don't worry though, we have plenty of other pages to explore</p>

              <router-link to="/" class="font-weight-bold text-white mt-5">Back to Cat Breeds Page</router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- Page content -->
    <section class="py-10 bg-kitten">
      <div class="container">
        <div class="row row-grid align-items-center">

        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'NotFound'
}
</script>
