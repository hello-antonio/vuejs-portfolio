import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  document.head.getElementsByTagName('meta').description.content =
    to.meta.metaTags[0].content

  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
