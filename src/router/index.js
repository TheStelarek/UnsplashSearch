import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PhotoShow from '../views/PhotoShow.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'photo-show',
    component: PhotoShow,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
