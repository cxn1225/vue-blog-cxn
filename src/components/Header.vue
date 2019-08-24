<template>
    <nav>
        <ul>
            <li>
                <router-link exact to="/">首页</router-link>
            </li>
            <li>
                <router-link exact to="/add">添加博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'app-header',
    }
</script>

<style scoped>
    ul {
        list-style: none;
        text-align: center;
        margin: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #ffffff;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }

    nav {
        background: #444444;
        padding: 14px 0;
        margin-bottom: 40px;
    }

    .router-link-active {
        color: #444444;
        background: #eeeeee;
    }
</style>