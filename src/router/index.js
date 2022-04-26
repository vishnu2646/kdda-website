import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import GalleryDetail from '../views/Gallery-detail.vue'
import Objectives from '../views/Objectives.vue'
import Achivements from '../views/Achivements.vue'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/gallerypictures/:id',
    name: 'gallerydetail',
    component: GalleryDetail
  },
  {
    path: '/objectives',
    name: 'objectives',
    component: Objectives
  },
  {
    path: '/achivements',
    name: 'achivements',
    component: Achivements
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
