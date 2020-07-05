<template>
    <div class="app">

        <input type="button" value="发送POST请求-无参数" @click="sendPost()"><br>
        <input type="button" value="发送POST请求-有参数" @click="sendPost1()">

    </div>
</template>

<script>
import axios from 'axios';
// axios 安装的同时默认携带一个模块 qs , 该qs 模式 可以实现url参数和JS对象的相互转换
import QS from 'qs';
// window.QS = QS;
export default {
    data() {
        return {
            size:2,
            typeId:10002
        };
    },
    methods:{
        sendPost(){
            // axios.post(url [, data [, config] ] )
            //     url 定义请求地址 
            //     data 是配置项 config 中 data和transformRequest 的整个参数定义
            //          根据参数类型进行请求区分
            //          string 表示请求只有 基本参数无文件上传，字符串格式必须使用 key=value&key=value…… 方式定义
            //          Object 表示请求包含文件上传，需要使用 formData对象进行定义
            //     config 定义依赖于 data的 定义
            //          params 用于定义 get 请求参数
            //          data 用于定义 post 请求参数 必须配合 transformRequest 进行请求前的参数处理
            axios.post("http://127.0.0.1/filmApi/loadFilms.php")
                 .then((response)=>{
                     console.log(response);
                 })
                 .catch((error)=>{
                     console.log(error);
                 })
        },
        sendPost1(){

            let formData = new FormData();
            formData.append("size",this.size);
            formData.append("typeId",this.typeId);

            // axios.post("http://127.0.0.1/filmApi/loadFilms.php",null,{
            //     data:{
            //         size:2,
            //         typeId:10002
            //     },
            //     // data:"size=2",
            //     // 在请求发送前对请求进行处理的函数
            //     transformRequest(data,headers){
            //         // console.log(data,headers);
            //         let formData = new FormData(); // JS 中专门用于ajax请求时的对象构建器
            //         for (const key in data) {
            //             formData.append(key,data[key]);
            //         }
            //         return formData;
            //     }
            // })
            // axios.post("http://127.0.0.1/filmApi/loadFilms.php","size=2&typeId=10002")
            // axios.post("http://127.0.0.1/filmApi/loadFilms.php","size="+this.size+"&typeId="+this.typeId)
            // axios.post("http://127.0.0.1/filmApi/loadFilms.php",formData)
            axios.post("http://127.0.0.1/filmApi/loadFilms.php",QS.stringify({
                size:2,
                typeId:10002
            }))
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
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
.content-box {
    background-color: #cccccc;
    position: absolute;
    top: @topHeight;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
}
</style>
