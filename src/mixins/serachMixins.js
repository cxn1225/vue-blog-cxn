
export default {
    data() {
        return {
            blogs: [],
            search: ""
        }
    },
    created() {
        this.$axios.get("/posts").then(result => {
            console.log(result.data)
            this.blogs = result.data
        })
    },
    directives: {       /* 自定义局部指令 */
        rainbow: {
            bind(el, binding, vnode) {
                el.style.color = "#" + Math.random().toString(16).slice(2, 8)
            }
        },
        theme: {
            bind(el, binding, vnode) {

                /* binding.value绑定值（指令等号后的内容） */
                if (binding.value == "wide") {
                    el.style.maxWidth = "1260px"
                } else if (binding.value == "narrow") {
                    el.style.maxWidth = "560px"
                }

                /* binding.arg参数值（指令冒号后等号前的内容） */
                if (binding.arg == "a") {
                    el.style.background = "#cccccc"
                    el.style.padding = "20px"
                }
            }
        }
    },
    filters: {       /* 自定义局部过滤器 */
        "to-uppercase"(value) {
            return value.toUpperCase()
        },
        snippet(value) {
            return value.slice(0, 100) + "......"
        }
    },
    computed: {
        filterBlog() {      /* 搜索标题 */
            return this.blogs.filter(blog => {
                return blog.title.match(this.search)
            })
        }
    }
}