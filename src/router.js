import Vue from 'vue'
/* 引入路由 */
import Router from 'vue-router'

import ShowBlogs from "./components/ShowBlogs.vue"
import AddBlog from "./components/AddBlog.vue"
import ListBlogs from "./components/ListBlogs.vue"
import SingleBlog from "./components/SingleBlog.vue"

/* 使用router */
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: ShowBlogs },
    { path: "/add", component: AddBlog },
    { path: "/list", component: ListBlogs },
    { path: "/blog/:id", component: SingleBlog },
  ]
})
