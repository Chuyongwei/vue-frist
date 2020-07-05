<template>
    <div class="app">
        <pre>{{ result }}</pre>
        <input type="button" value="发生axiuos-get请求-无参数" @click="sendGet1()">
        <br>
        <input type="number" v-model="num">
        <input type="button" value="发生axiuos-get请求-带参数" @click="sendGet2()">

    </div>
</template>

<script>
// axios 的模块加载
import axios from 'axios';
// console.log(axios); // 加载的是一个可以用于全请求的ajax方法
// console.log(axios.prototype)

export default {
    data() {
        return {
            result:[],
            num:"1"
        };
    },
    methods:{
        sendGet1(){
            // 发生请求
            // 2、在异步请求方法中通过 axios 构成方法，调用对应的异步请求方法
            // axios.get(url[, config])
            //      url 定义请求地址的
            //      config 定义请求的配置
            //          - params 为URL定义请求参数，取值为对象，
            //                  其中对象的key为参数名称，对象的value为参数值
            //                  被定义在params中的参数，在请求发生时会直接转为对于的结果
            // axios的所有异步请求方法 都默认存在一个返回值，该值为 promise 构成对象
            // 基于 promise 对象的基础语法，完成后续数据处理操作
            // let p = axios.get("http://127.0.0.1/filmApi/loadTyps.php");
            // console.log(p);
            
            // axios 的请求结果会根据成功和失败分别返回两种数据
            //      1、请求成功，会返回一个response 对象
            //            该对象描述当前请求相关关键参数对象，该对象包含发生请求的时间，地址，状态，配置，响应结果……
            //      2、请求失败，会返回一个error对象
            // p.then(function(response){},function(error){});
            // p.then(function(response){
            //     console.log(response.data);
            // },function(error){
            //     console.log(error);
            //     alert("请求失败")
            // });
            
            axios.get("http://127.0.0.1/filmApi/loadTyps.php")
                .then((res)=>{
                    // console.log(res);
                    if(res.statusText=="OK"&&res.data.resultState){
                        this.result = res.data;
                    }else{
                        // Promise.resolve
                        // Promise.reject
                        return Promise.reject("参数");
                    }
                })
                .catch((error)=>{
                    // console.log(error)
                    alert("程序错误，请联系管理员")
                })
        },
        sendGet2(){
            // 直接使用 get 参数定义HTTP 请求地址之后
            // axios.get("http://127.0.0.1/filmApi/loadFilms.php?typeId=10001&size=2")
            axios.get("http://127.0.0.1/filmApi/loadFilms.php",{
                params:{
                    typeId:"10001",
                    size:this.num
                }
            })
            .then(( { statusText,data } )=>{
                if(statusText=="OK"&&data.resultState){
                    this.result = data.result;
                }
            })
            .catch(()=>{
                alert("程序错误，请联系管理员")
            })
        }
    }
};
</script>

<style lang="less">
@import "./less/base.less";
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
</style>
