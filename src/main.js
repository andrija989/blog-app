import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import AppPosts from './components/AppPosts'

const routes = [
  { path:'/posts',component:AppPosts}
]

const router = new VueRouter({
  routes:routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
