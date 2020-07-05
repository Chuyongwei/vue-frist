// ES6 的 import from 语法 = 加载外部js文件
//    vue的构成环境基于 node 语法
//    import from 语法 实际上就是 node 语法中 require() 方法 + 解析规则
//    解析规则有框架定义：直接从导入的对象中 加载需要的结果

// const Vue1 = require("vue");
// console.log(Vue1);
// const obj = require("../ccc");
// console.log(obj);

// const obj = require("../ddd");
// console.log(obj);

/*
  require : 加载外部模块（加载外部JS文件的）
  require(arg) arg 怎么取值
    arg 类型为 string
      取值为名称：加载node自带的模块，或者项目目录下 node_modules 中的模块
      取值为地址：./  ../  按照路径寻找需要被加载的文件
                取值为地址，且引入的文件没有定义后缀名称,默认按照 js -> json 方式进行补充
                
      取值对于的模块是一个 文件夹而非文件
        1、先寻找文件夹中是否存在 package.json 文件，如果存在加载文件中 main配置
        2、如果没有package.json 文件，会直接加载该文件夹下的 index.js 文件
        3、如果两个都没有，直接报错

  上述规则 直接继承给了 vue模块项目中  import from 语法
*/

// import 自定义的变量名称 from '需要加载的模块名称|路径地址' 
import Vue from 'vue'  // 加载 vue的核心语法
// console.log("import",Vue);

// vue模块化项目中， 以 .vue 结尾的文件 被称之为 单文件组件
import App from './App.vue'
// console.log(App);  App 是 import导入被vue加载和处理后的 $options 配置项
// 定义Vue的全局配置，配置关闭控太的产品提示
Vue.config.productionTip = false

import plugins from './plugins'
import global from './global'
import api from './api'
// Vue.use(options) 为当前项目装载基于 Vue 的全局功能 （全局使用的插件，全局使用的方法、全局使用组件、全局使用过滤器……）
/*
    options 取值为一个 具有固定结构的 对象
    {
        install:function(Vue){   }
    }
    Vue.user(options) ==> 完成对 options.install(Vue);
*/
Vue.use(plugins);
Vue.use(global);
Vue.use(api);

import router from './router';

// 构建vue根实例，启动vue运行
new Vue({
    // 被路由增加路由属性 router 取值为 路由构建对象
    router:router,
    render: h => h(App),
    // render:function(createElement){
    //   return createElement(App)
    // }
}).$mount('#app')
