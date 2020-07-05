<template>
    <div class="home-box">
        <!-- 首页分类列表 start -->
        <div v-for="type in types" :key="type.typeId">
            <div class="list-name">
                <span>{{ type.typeName }}</span>
                <!-- <span class="list-more">更多 ></span> -->
                <!-- get参数 -->
                <!-- <router-link class="list-more" 
                    tag="span"
                    :to=" '/list?typeId='+type.typeId+'&name='+type.typeName  "
                >更多 ></router-link> -->
                <!-- 
                    rest参数定义
                    以基本URL地址的方式进行拼接，只拼接参数值 
                -->
                <!-- <router-link class="list-more" 
                    tag="span"
                    :to=" '/list/'+type.typeId+'/'+type.typeName+'.html'  "
                >更多 ></router-link> -->
                <router-link class="list-more" 
                    tag="span"
                    :to=" { name:'list',params:{ typeId:type.typeId,typeName:type.typeName} } "
                >更多 ></router-link>
            </div>
            <FilmList class="list-content" :films="type.list"></FilmList>
        </div>
        <!-- 首页分类列表 end -->
    </div>
</template>
<script>
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
        loadHomeData() {
            this.$api
                .loadTypesList()
                .then(data => {
                    if (!data.resultState) {
                        return Promise.reject(data.msg);
                    }
                    
                    let temp = [];
                    this.types = data.result;
                    for (let i = 0; i < data.result.length; i++) {
                        let p = this.$api.loadFilmsList({
                            typeId: data.result[i].typeId
                        });
                        temp.push(p);
                    }
                    return Promise.all(temp);
                })
                .then((data)=>{
                    for (let i = 0; i < data.length; i++) {
                        if (!data[i].resultState) {
                            return Promise.reject(data[i].msg);
                        }
                        // this.types[i].list = data[i].result;
                        this.$set(this.types[i],"list",data[i].result);
                    }
                })
                .catch(this.$error);
        }
    },
    mounted() {
        this.loadHomeData();
        console.log("mounted-home");
    },
    destroyed(){
        console.log("destroyed-home");
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