<template>
    <!-- 项目容器 start-->
    <div class="app">
        <NavBar></NavBar>
        <!-- 首页正文 start -->
        <div class="content-box">
            <component :is=" page "></component>
        </div>
        <!-- 首页正文 end -->
        <BoottomBar v-show="page=='DetailPage'"></BoottomBar>

    </div>
    <!-- 项目容器 end-->
</template>

<script>
// import asdasdas from 'asdasdasd'
// 单文件组件在导入时 可以省略后缀
import NavBar from "./components/NavBar";
import BoottomBar from './components/BoottomBar';

import HomePage from "./views/HomePage";
import FilmPage from './views/FilmPage';
import DetailPage from './views/DetailPage';

export default {
    data() {
        return {
            page: "FilmPage"
        };
    },
    components: {
        NavBar,BoottomBar,
        HomePage,
        FilmPage,
        DetailPage
    },
    mounted() {
        // var user = null;
        // console.log(user.aaa);
        // for (let i = 0; i < 10; i++) {
        //     // debugger; // 在开发环境下启动浏览器调试功能
        //     console.log(i);
        // }
        console.log(this);
    }
};
</script>

<style lang="less">
@import "./less/base.less";
// @import "./less/var.less";
// * {
//     padding: 0px;
//     margin: 0px;
//     background-color: @dark;
// }
// .app * {
//     background-color: @light;
// }
// // 标题名称
// .list-name{
//     // margin-bottom: 0.2rem;
//     >span{
//         display: inline-block;
//         margin: 0.24rem 0rem 0.24rem 0.1rem;
//         padding: 0rem 0.2rem 0rem 0.1rem;
//         font-size: 0.32rem;
//     }
//     >span:first-child{
//         border-left: 4px solid @blue;
//     }
//     >span.list-more{
//         float: right;
//         font-size: 0.28rem;
//         color: @blue;
//     }
// }
</style>

<style lang="less" scoped>
// @import "./less/var.less";
.app {
    max-width: 750px;
    margin: 0 auto;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: @light;
    overflow: hidden;
}
.content-box {
    background-color: #cccccc;
    position: absolute;
    top: @topHeight;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
}
</style>
