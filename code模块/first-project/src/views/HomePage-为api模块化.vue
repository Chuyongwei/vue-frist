<template>
    <div class="home-box">
        <!-- 首页分类列表 start -->
        <div v-for="type in types" :key="type.typeId">
            <div class="list-name">
                <span>{{ type.typeName }}</span>
                <span class="list-more">更多 ></span>
            </div>
            <FilmList class="list-content" :films="type.list"></FilmList>
        </div>
        <!-- 首页分类列表 end -->
    </div>
</template>
<script>
import axios from "axios";

import FilmList from "../components/FilmList";

export default {
    components: {
        FilmList
    },
    data() {
        return {
            types: []
        };
    },
    methods: {
        //ES6的同步方法转换器  async await
        /*
            async function show(){

                await ajax() // 异步代码

                for(  ){

                }

            }
        
        */
        async loadTypes() {
            try {
                /*
                    axios配合ES6 的 async 和 await 可以直接实现 异步请求转同步处理
                */
                let { statusText, data } = await axios.get(
                    "http://127.0.0.1/filmApi/loadTyps.php"
                );
                if (statusText != "OK" || !data.resultState) {
                    // alert("请求失败");
                    // return;
                    throw new Error("请求错误"); // 抛出错误，可以被同步代码的 catch 进行捕获操作
                }
                for (let i = 0; i < data.result.length; i++) {
                    let res = await this.loadFilmsByTypeId(data.result[i].typeId);
                    if (res.statusText != "OK" || !res.data.resultState) {
                        // alert("请求失败111");
                        // // console.log(res);
                        // return;
                        throw new Error("参数错误"); // 抛出错误，可以被同步代码的 catch 进行捕获操作
                    }
                    data.result[i].list = res.data.result;
                }
    
                this.types = data.result;
            } catch (error) {
                console.log(error);
                console.log(error.message);
                // alert(error.message);

                // 自定义插件进行调用
                // this.$showTip(error.message,4);
                // this.$showMsg(error.message);
                showMsg(error.message);
            }
        },
        async loadFilmsByTypeId(id) {
            let res = await axios.get("http://127.0.0.1/filmApi/loadFilms.php", {
                params: {
                    typeId: id
                }
            });
            // console.log(res);
            return res;
        }
    },
    mounted() {
        this.loadTypes();
    }
};
</script>

<style lang="less" scoped>
// 首页样式
.home-box {
    position: absolute;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    overflow-y: auto;
}
.list-content {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    margin-bottom: 0.1rem;
    font-size: 0rem;
    &::after {
        content: "";
        width: 0.1rem;
        display: inline-block;
    }
}
</style>