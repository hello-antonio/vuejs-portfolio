import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: Home,
      meta: {
        title: 'About - Giovanni De Andre',
        metaTags: [
          {
            name: 'description',
            content: 'Life long student - Anime enthusiast - Minimalist'
          },
          {
            property: 'og:description',
            content: 'Life long student - Anime enthusiast - Minimalist'
          }
        ]
      }
    },
    {
      path: '/experience',
      name: 'experience',
      meta: {
        title: 'Experience & Development',
        metaTags: [
          {
            name: 'description',
            content:
              "Here you'll find a collection of school and personal projects/assigments"
          },
          {
            property: 'og:description',
            content:
              "Here you'll find a collection of school and personal projects/assigments"
          }
        ]
      },
      component: () =>
        import(/* webpackChunkName: "experience" */ './views/Experience.vue')
    },
    {
      path: '*',
      name: '404',
      meta: {
        title: 'Page Not Found',
        metaTags: [
          {
            name: 'description',
            content: 'Sorry page was not found'
          },
          {
            property: 'og:description',
            content: 'Sorry page was not found'
          }
        ]
      },
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue')
    }
  ]
})
