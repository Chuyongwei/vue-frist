<template>
    <!-- 头部搜索框 start -->
    <nav class="nav-box">
        <div class="nav-input">
            <input id="userInput" type="text" v-model="seach" @blur="changeShowBtn(false)" @focus="changeShowBtn(true)" />
        </div>
        <div v-show="showBtn" class="nav-btn">
            <span @mousedown="pageChange()">搜索</span>
            <!-- <router-link to="/list" tag="span">搜索</router-link> -->
        </div>
    </nav>
    <!-- 头部搜索框 end -->
    <!-- 
        单文件组件构成时，template 模板为单文件组件必须定义的结构且只能定义一个
        script和style可以根据选择进行定义
            如果该单文件只是一个基本页面，可以不用定义 script ，vue默认提供配置项
    -->
</template>
<script>
export default {
    data() {
        return {
            showBtn: false,
            seach:""
        };
    },
    methods: {
        changeShowBtn(arg) {
            this.showBtn = arg;
        },
        pageChange(){
            // console.log("pageChange")
            // location.hash = "/list";
            // history.pushState({},"","/list");
            // console.log(this);
            // 控制页面切换
            // arg 和 router-link 标签的 to 取值一致
            // this.$router.push(arg)
            this.$router.push({
                name:"list",
                query:{
                    seach:this.seach
                }
            })
        }
    }
};
</script>
<style lang="less" scoped>
// @import "../less/var.less";
.nav-box {
    height: @topHeight;
    line-height: @topHeight;
    background-color: @white;
    border-bottom: 1px solid @gray-light;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    box-sizing: border-box;
    > .nav-input {
        flex-grow: 3;
        padding: 0rem 0.2rem;
        box-sizing: border-box;
        > input[type="text"] {
            box-sizing: border-box;
            width: 100%;
            padding: 0rem 0.1rem;
            height: @topHeight - 0.4rem;
            border: none;
            outline: none;
            /*

            */
            background-image: url("../assets/search.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 0.4rem;
            background-color: @gray-ee;
            border-radius: 0.1rem;
            &:focus {
                background-image: none;
                border: 1px solid @blue;
            }
        }
    }
    > .nav-btn {
        flex-grow: 1;
        text-align: center;
        color: @blue;
        cursor: pointer;
        font-size: 0.36rem;
        // display: none;
    }
}
</style>

