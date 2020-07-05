<template>
    <!-- 项目容器 start-->
    <div class="app">
        <h1>h1标签</h1>
        <h2>h2标签</h2>
    </div>
    <!-- 项目容器 end-->
</template>

<script>
export default {

};
</script>


<style scoped lang="less">
/* 
    vue模块化的单文件组件中，style可以直接加载 动态样式
    1、需要为项目添加相关动态样式依赖+样式编译器，vue单文件组件解析式的样式转换
    2、在定义单文件组件时，需要对 style 标签通过属性方式描述当前应用的动态样式类型
    <style lang="sass|scss|less|stylus">
*/
    @blue: #007bff;
    @indigo: #6610f2;
    @purple: #6f42c1;
    @pink: #e83e8c;
    @red: #dc3545;
    @orange: #fd7e14;
    @yellow: #ffc107;
    @green: #28a745;
    @teal: #20c997;
    @cyan: #17a2b8;
    @white: #fff;
    @gray: #6c757d;
    @gray-dark: #343a40;
    @primary: #007bff;
    @secondary: #6c757d;
    @success: #28a745;
    @info: #17a2b8;
    @warning: #ffc107;
    @danger: #dc3545;
    @light: #f8f9fa;
    @dark: #343a40;
    h1{
        color: @pink;
    }
    h2{
        color: @primary;
    }
</style>

