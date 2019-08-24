import Vue from 'vue'
/* 引入axios */
import axios from "axios"

import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false


/* 配置请求根路径 */
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"

/* 配置vue原型 */
Vue.prototype.$axios = axios


/*自定义全局指令directive（指令名称，指令功能）：无参数*/
Vue.directive("rainbow", {
  /* 
    el:标签元素
    binding：指令的参数(对象)
    vnode：虚拟dom
  */
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2, 8)
  }
})

/*自定义全局指令directive（指令名称，指令功能）：有参数(绑定值，参数值)*/
Vue.directive("theme", {
  bind(el, binding, vnode) {

    /* binding.value绑定值（指令等号后的内容） */
    if (binding.value == "wide") {
      el.style.maxWidth = "1260px"
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px"
    }

    /* binding.arg参数值（指令冒号后等号前的内容） */
    if (binding.arg == "a") {
      el.style.background = "#ddd"
      el.style.padding = "20px"
    }
  }
})


/* 自定义全局过滤器filter(过滤器名称，过滤器功能函数) */
Vue.filter("to-uppercase", value => {   /* 功能：变大写 */
  return value.toUpperCase()
})

Vue.filter("snippet", value => {   /* 功能：只显示100个字符 */
  return value.slice(0, 100) + "......"
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
