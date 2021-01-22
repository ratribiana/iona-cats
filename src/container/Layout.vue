<template>
  <div id="mainWrapper" class="wrapper">
    <!-- Navigation bar -->
    <navbar></navbar>
    <!-- Navigation bar -->

    <!-- Header -->
    <content-header></content-header>
    <!-- Header -->

    <!-- Contents -->
    <div class="main-content">
      <router-view></router-view>

      <!-- Footer -->
      <content-footer></content-footer>
      <!-- Footer -->
    </div>
    <!-- Contents -->
  </div>
</template>

<script>
/**************************************************************************
 * Main container of all the views and components
 ***************************************************************************/
  import Navbar from 'components/Layouts/Navbar'
  import ContentHeader from 'components/Layouts/ContentHeader'
  import ContentFooter from 'components/Layouts/ContentFooter'

  export default {
    name: 'ContentLayout',
    components: {
      Navbar,
      ContentHeader,
      ContentFooter
    }
  }
</script>
