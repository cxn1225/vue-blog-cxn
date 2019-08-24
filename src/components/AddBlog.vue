<template>
    <div class="add-blog">
        <h2>添加最新博客</h2>
        <form action="" v-if="!submitted">
            <label>博客标题</label>
            <input type="text" required v-model.lazy="blog.title" />
            <label>博客内容</label>
            <!-- lazy懒加载：输入框脱离焦点时更新数据 -->
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Vue.js</label>
                <input type="checkbox" value="vue" v-model="blog.categories">
                <label>React.js</label>
                <input type="checkbox" value="react" v-model="blog.categories">
                <label>Angular.js</label>
                <input type="checkbox" value="angular" v-model="blog.categories">
                <label>微信小程序</label>
                <input type="checkbox" value="wechat" v-model="blog.categories">
            </div>

            <!-- 选项 -->
            <label>作者：</label>
            <select v-model="blog.author">
                <option v-for="(item, index) in authors" :key="index">{{item}}</option>
            </select>

            <!-- 数据请求 -->
            <button @click.prevent="handlePost">添加博客</button>
        </form>
        <!-- 添加成功 -->
        <div>
            <h3 v-if="submitted">添加成功!!!</h3>
        </div>

        <div id="preview">
            <!-- 博客预览 -->
            <h3>博客预览</h3>
            <p>标题预览：{{blog.title}}</p>
            <p>内容预览：</p>
            <p>{{blog.content}}</p>
            <p>技术分类:</p>
            <ul>
                <li v-for="(item, index) in blog.categories" :key="index">{{item}}</li>
            </ul>
            <p>作者:{{blog.author}}</p>
        </div>
    </div>
</template>

<script>
    /* 组件内应用（局部应用） */
    /*  import axios from "axios" */
    export default {
        name: 'AddBlog',
        data() {
            return {
                blog: {
                    title: "",
                    content: "",
                    categories: [],
                    author: "佩奇"
                },
                submitted: false,
                authors: ["佩奇", "苏西", "蛇尾"]
            }
        },
        methods: {
            handlePost() {
                this.$axios.post("/posts", {
                    title: this.blog.title,
                    body: this.blog.content,
                    userId: 1,

                }).then(result => {
                    console.log(result)
                    this.submitted = true
                })
            }
        },
    }
</script>

<style scoped>
    #add-blog * {
        box-sizing: border-box;
    }

    #add-blog {
        margin: 20px auto;
        max-width: 500px;
    }

    label {
        display: block;
        margin: 20px 0 10px;
    }

    input[type="text"],
    textarea {
        display: block;
        width: 100%;
        padding: 8px;
    }

    #preview {
        padding: 10px 20px;
        border: 1px solid #ccc;
        margin: 30px 0;
    }

    h3 {
        margin-top: 10px;
    }

    #checkboxes input {
        display: inline-block;
        margin-right: 10px;
    }

    #checkboxes label {
        display: inline-block;
    }
</style>