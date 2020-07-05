<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="text" v-model="msg">
    <!-- 单文件组件中，进行组件调用时，可以不用 将标签名转为 连字符 -->
    <HelloWorld :msg=" msg " />
  </div>
</template>

<script>
// 定义组件构成的 相关外部功能
// 以及组件的基本配置
import HelloWorld from './components/HelloWorld.vue'

/*
  export default 是 ES6 的导出语法
  实际上时 node 的 module.exports 的封装

  vue中导出js对象前，会进行 相关的 vue语法装载和处理
  将当前导出的 vue配置项 自动装载 于当前js代码属于同一文件的 template模板
*/
export default {
  name: 'app',
  data(){
    return {
      msg:"测试数据"
    }
  },
  components: {
    HelloWorld:HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>
