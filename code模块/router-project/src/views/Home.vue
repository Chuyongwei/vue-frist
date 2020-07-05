<template>
    <div class="home">
        <h1>home</h1>
        <!-- <router-link to="/news">news</router-link><br> -->
        <router-link to="/home/news">news-完成地址</router-link><br>
        <!-- <router-link to="news">news-相对地址</router-link><br> -->

        <router-link to="/hot">hot</router-link>

        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "home"
};
</script>
