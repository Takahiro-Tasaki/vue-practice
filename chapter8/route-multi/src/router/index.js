import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Article from '../components/Article.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    components: {
      default: Main,
      sub: Article
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
