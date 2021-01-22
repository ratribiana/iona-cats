<template>
  <router-view></router-view>
</template>

<script>
/**************************************************************************
 * Root of the application defined in Vue Component file format
 ***************************************************************************/

/* Import the main and custom styles here */
import '@/assets/sass/main.scss'

export default {
  name: 'AppView'
}
</script>

<style lang="scss">
  /* Import Bootstrap Vue styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css'
</style>
