<template>
    <div class="single-Blog">
        <button @click="$router.go(-1)">返回</button>
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
        <p>{{blog.id}}</p>
        <p>{{blog.userId}}</p>
    </div>
</template>

<script>
    export default {
        name: 'singleBlog',
        data() {
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },
        created() {
            this.$axios.get(`/posts/${this.id}`).then(result => {
                this.blog = result.data
                console.log(result.data)
            })
        },
    }
</script>

<style scoped>

</style>