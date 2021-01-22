import Vue from 'vue'
import VueRouter from 'vue-router'
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const Layout = () => import(/* webpackChunkName: "Layout" */ 'container/Layout')
const CatBrowser = () => import(/* webpackChunkName: "CatsPages" */ 'views/CatBrowser')
const CatDetails = () => import(/* webpackChunkName: "CatsPages" */ 'views/CatDetails')
const PageNotFound = () => import(/* webpackChunkName: "Pages" */ 'views/NotFound')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cats',
    redirect: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Cat Browser',
        component: CatBrowser
      },
      {
        path: '/:catID',
        name: 'Cat Details',
        component: CatDetails
      }
    ]
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: (to, from , savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('*')
  } else {
    next()
  }
})

export default router
