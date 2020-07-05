<template>
    <!-- 项目容器 start-->
    <div class="app">
        <h1>h1标签</h1>
        <h2>h2标签</h2>
        <hr>
        <!-- <TestStyle></TestStyle> -->
        <component :is="page"></component>
        <input type="button" value="装载TestStyle组件" @click=" page='TestStyle' ">
    </div>
    <!-- 项目容器 end-->
</template>

<script>
import TestStyle from './components/TestStyle'
export default {
    data(){
        return {
            page:""
        }
    },
    components:{
        TestStyle
    }
};
</script>


<style scoped>
/* 
    在一个组件文件中 style 标签可以定义 0~n个
    任意组件中的 style 默认都是定义全局样式的
    => 所以在项目开发时，一定注意样式加载先后 ?
    => 如果需要将单文件组件中的样式，只用于 当前 组件的页面标签
        可以通过 scoped 属性方式描述当前样式块中的样式为局部样式
        在编译的过程中为当前组件的所有标签添加了一个随机属性，样式选择器组合一个属性选择器

*/
h1{
    color: red;
}
</style>
<style>
h2{
    color: blue;
}
</style>
