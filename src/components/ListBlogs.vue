<template>
    <div v-theme:a="'wide'" id="show-blogs">
        <h1>测试mixin混入</h1>
        <input type="text" placeholder="search something..." v-model="search">
        <div v-for="(item, index) in filterBlog" :key="index" class="single-blog">
            <h2 v-rainbow>{{item.title | to-uppercase}}</h2>
            <article>{{item.body | snippet}}</article>
        </div>
    </div>
</template>

<script>
    import serachMixins from "../mixins/serachMixins.js"
    export default {
        name: 'ListBlogs',
        mixins: [serachMixins]       /* 混入 */
    }
</script>

<style scoped>
    #show-blogs {
        max-width: 800px;
        margin: 0 auto;
    }

    .single-blog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: content-box;
        background-color: #eeeeee
    }

    input[type="text"] {
        padding: 8px;
        width: 100%;
    }
</style>