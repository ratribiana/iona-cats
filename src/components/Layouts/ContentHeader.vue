<template>
  <div>
    <!-- Header -->
    <div class="header bg-default py-3">
      <div class="container">
        <div class="header-body">
          <div class="row justify-content-left">
            <div class="row w-100">
              <div class="col-lg-6 col-7">
                <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                  <route-bread-crumb></route-bread-crumb>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header -->
  </div>
</template>

<script>
/**************************************************************************
 * Header global component
 ***************************************************************************/
import RouteBreadCrumb from 'components/Breadcrumb/RouteBreadcrumb'

export default {
  name: 'HeaderLayout',
  components: {
    RouteBreadCrumb
  }
}
</script>
