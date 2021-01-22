<template>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg bg-kitten py-2">
    <div class="container">
      <a class="navbar-brand text-white" href="/">
        <img ref="logo" src="/image/logo.png" class="navbar-brand-img" alt="The Cats">
        <span class="ml-2" ><strong>{{ title }}</strong></span>
      </a>
    </div>
  </nav>
  <!-- Navigation Bar -->
</template>

<script>
/**************************************************************************
 * Navigation global component
 ***************************************************************************/
export default {
  name: 'NavbarLayout',
  data () {
    return {
      title: 'The Cats'
    }
  }
}
</script>
