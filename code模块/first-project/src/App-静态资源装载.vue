<template>
    <!-- 项目容器 start-->
    <div class="app">
        <!-- 
            vue 对于项目组件中加载的 图片，如果使用的是 相对路径
            vue会对图片完成两种路径解析操作
                1、编译路径解析
                    -> 对 img进行相对路径图片定义是，地址将参与编译
                       开发时可以直接以当前组件进行路径定义
                       在程序打包编译时，会直接以 BASE_URL地址进行  路径重写
                       src="../public/imgs/film.jpg 经过编译 BASE_URL/imgs/film.jpg
                    -> 定义在组件样式标签内的地址会进行 vue打包编译，以 BASE_URL地址进行  路径重写
                2、非编译路径解析
                    css 行内表达式定义的 背景图片地址，该地址不会参与vue编译，定义在行内的地址会被直接
                    作为标签的使用地址进行保留
                    -> 可以直接以 index.html 作为参考路径文件，定义行内图片地址
                    
                    img 标签的src 通过指令方式进行地址绑定，地址不会参与编译操作的
                    -> 可以直接以 index.html 作为参考路径文件，定义行内图片地址

        -->
        <!-- <img width="200px" height="200px" src="../public/imgs/film.jpg" alt="" srcset="">
        <div class="bi" style="background-image: url('./imgs/film.jpg')"></div>
        <div class="bi2"></div>
        <img width="200px" height="200px" v-bind:src=" imgSrc " alt="" srcset=""> -->
        <hr>
        <!-- 
            base64的图片转换
        -->
        <img src="./assets/aaa.png" alt="" srcset="">
        <img src="./assets/5-121204193935-51.gif" alt="" srcset="">
    </div>
    <!-- 项目容器 end-->
</template>

<script>
export default {
    data(){
        return {
            imgSrc:"./imgs/film.jpg"
        }
    }
};
</script>

<style>
.bi{
    height: 200px;
    width: 200px;
    border: 1px solid black;
}
.bi2{
    height: 200px;
    width: 200px;
    border: 1px solid black;
    background-image: url('../public/imgs/film.jpg');
}
</style>
