<template>
  <!-- Breadcrumb list item -->
  <li class="breadcrumb-item" :class="{ active: active }"><slot></slot></li>
  <!-- Breadcrumb list item -->
</template>

<script>
/**************************************************************************
 * Return breadcrum item
 ***************************************************************************/
export default {
  name: 'breadcrumb-item',
  props: {
    active: {
      type: Boolean,
      default: false,
      description: 'Whether breadcrumb item is active'
    }
  }
}
</script>
