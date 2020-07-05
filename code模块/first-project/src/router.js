// 统一定义路由功能
// 路由的主要功能，就是通过描述 组件和模拟URL地址的关系
// 实现 url地址模拟变化切换页面显示组件

// 1、加载路由模块
import VueRouter from 'vue-router';

// 2、通过执行 install 配置方法 ，完成vue的全局混合操作
//     a、通过混入 beforeCreate 实现vue实例的 router属性扩展
//     b、Vue.component('RouterView', View); 定义全局组件 RouterView ,定义描述当地址发生变化是，对应组件的页面占位
//     c、Vue.component('RouterLink', Link); 定义全局组件 RouterLink ,在页面中描述url地址的切换变化功能
//                      routerLink 的必须定义属性 to，类似于a标签href 描述地址的变化执行
//                      routerLink 形象的叫该组件为变色龙组件，该组件存在一个属性 tag 可以描述项目中 routerLink 的标签转换规则
//                              tag 默认取值为  a
//      d、为项目中所有的vue组件统一定义数据仓库变量 $route = 路由激活信息对象
//      e、为项目中所有的vue组件统一定义实例对象 $router = 路由控制对象，该对象中封装了所有的路由切换方法，会自动识别模式
/*
Vue.mixin({
    // 为 当前项目的所有组件增加一个 新的 配置项 router
    // 通过加载传入的路由对象信息，实现路由的初始化
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
    Vue.component('RouterView', View);
    Vue.component('RouterLink', Link);
  });
*/
import Vue from "vue";
Vue.use(VueRouter);


import HomePage from './views/HomePage';
import FilmPage from './views/FilmPage';
import DetailPage from './views/DetailPage';
import NotFound from './views/NotFound';


// 3、创建路由对象
//   通过创建路由对象时定义的参数，描述组件和地址关系
//   options:Object
//          1、定义路由的基本模式和功能
//          2、自定义路由地址和组件的关系
// new VueRouter(options);
const config = {
    /*
        mode 用于描述路由地址的表现形式 hash|history
            + hash 模式 采用锚点技术，具有#关键字
            + history 模式 采用H5-history对象技术，不具有#关键字 & 需要服务器进行定义配合的
        linkActiveClass:"active", 重写 激活路由样式
        linkExactActiveClass:"exact-active", 重写 激活路由样式
        routes 路由表属性 ，描述项目中页面组件和地址的关联关系
            取值 为 对象数组 [{ path,component，redirect，children，meta,name }]
            + path 定义组件对应的地址 ，一级路由定义地址必须以 / 开头，子级路由地址定义时可以定义 / 也可以不定义 /
                - 子级路由取值
                    取值为 以 / 开头的 绝对地址，表示地址在url上将以服务器根地址进行展示更改
                    取值为 不以 / 开头的 相对地址，表示子路由组件访问的地址将在父路由组件地址基础上进行拼接
                        如果是相对路径 router-link 的to 属性必须定义完成地址结构
                - 一级路由取值为 / 表示定义默认访问地址的指向
                - 子级路由取值为 “” 表示定义默认访问地址的指向
                - 取值为 * 表示用户访问的地址在路由表中不存在时，统一展示
                - path 路径定义中的  ： 关键字，描述该位置为一个 rest 参数，不参与组件地址指向
                    : 后定义当前参数所有使用的 变量名称
                - path 路径定义时 ，可以通过关键字  ？ 方式 修饰对应的rest 参数为 可选参数
            + component 定义地址对应的组件，组件为页面需要切换的展示组件
            + redirect 地址重定向 ，取值为另外一个路由地址
                当用户访问具有该属性的地址时，该属性会直接将浏览器地址 且换到配置项地址上
            + children 定义描述当前路由的 子路由 取值为 和 routes 属性取值一样
            + meta 为当前组件和路由地址，定义唯一的元信息数据
            + name 为vue项目中 地址使用和JS使用提供 别名 ，具有该属性的路由叫做 具名路由
    */
    // mode:"hash|history",
    mode:"hash",
    linkActiveClass:"active",
    linkExactActiveClass:"exact-active",
    routes: [
        // 定义一个默认路由地址 = 用户通过 地址端口|域名访问时，所对应的展示组件
        {
            path:"/", // 重写地址的默认访问指向
            // component:HomePage
            redirect:"/home"
        },
        {
            path:"/home",//当前组件的地址
            name:"home",
            component:HomePage,//当前地址的组件
            meta:{
                hideFiexdBtn:true
            }
        },
        {
            path:"/list/:typeId?/:typeName?",
            name:"list",
            component:FilmPage
        },
        {
            path:"/detail",
            name:"detail",
            component:DetailPage,
            meta:{
                // showBottom:true
                bottomName:"BoottomBar"
            }
        },
        {
            path:"*",
            component:NotFound
        }
    ]

}
const router = new VueRouter(config);
// console.log(router.init);

// 4、将定义的路由对象进行导出
export default router;
// 5、在main.js 为 根实例 new Vue 添加路由对象属性
/*
new Vue({
    // 被路由增加路由属性 router 取值为 路由构建对象
    router:router,
    render: h => h(App),
}).$mount('#app')
*/

// export default {
//     install:function(){
//         // 
//     }
// }