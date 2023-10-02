import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'
import NotFound from '../views/jobs/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/jobs',
      name: 'job',
      component: Jobs
    },
    {
      path: '/jobs/:id',
      name: 'JobsDetails',
      component: JobsDetails,
      props: true
    },
    // catch all 404
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound


    }
  ]
})

export default router
