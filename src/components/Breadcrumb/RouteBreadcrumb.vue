<template>
  <bread-crumb list-classes="breadcrumb-links breadcrumb-dark">
    <BreadCrumbItem>
      <li class="breadcrumb-item">
        <span>
          >>
        </span>
      </li>
    </BreadCrumbItem>
    <BreadCrumbItem
      v-for="(route, index) in $route.matched.slice()"
      :key="route.name"
      :active="index === $route.matched.length - 1"
      style="display:inline-block"
    >
      <span v-if="index < $route.matched.length - 1" >
        {{ route.name }}
      </span>
      <span v-else>{{ route.name }}</span>
    </BreadCrumbItem>
  </bread-crumb>
</template>

<script>
/**************************************************************************
 * Route breadcrumb that is clickable in view
 ***************************************************************************/
  import BreadCrumb from './Breadcrumb'
  import BreadCrumbItem from './BreadcrumbItem'

  export default {
    name: 'RouteBreadCrumb',
    components: {
      BreadCrumb,
      BreadCrumbItem
    }
  }
</script>
