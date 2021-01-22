import Breadcrumb from './Breadcrumb.vue'
import BreadcrumbItem from './BreadcrumbItem.vue'
import RouteBreadcrumb from './RouteBreadcrumb'


// Install and export components 
const BreadcrumbPlugin = {
  install(Vue, options) {
    Vue.component('bread-crumb-bar', Breadcrumb)
    Vue.component('bread-crumb-item', BreadcrumbItem)
    Vue.component('route-bread-crumb', RouteBreadcrumb)
  }
}

export default BreadcrumbPlugin
