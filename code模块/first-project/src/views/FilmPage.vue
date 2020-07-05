<template>
    <!-- 首页分类列表 start -->
    <div class="films-box">
        <div class="list-name">
            <!-- <span>{{ $route.query.name }}</span> -->
            <span>{{ getTypeName }}</span>

        </div>
        <FilmList class="content-list" :films="films"></FilmList>
    </div>
    <!-- 首页分类列表 end -->
</template>
<script>
import FilmList from '../components/FilmList';

export default {
    components:{
        FilmList
    },
    data(){
        return {
            films:[]
        }
    },
    computed:{
        getTypeName(){
            return this.$route.params.typeName?this.$route.params.typeName.replace(/\.html$/,""):"全网查询";
        }
    },
    watch:{
        "$route.query.seach":function(){
            console.log("watch-seach");
            this.loadFilmsData();
        }
    },
    methods:{
        loadFilmsData(){
            let params = {
                size:12
            }
            if(this.$route.params.typeId){
                params.typeId = this.$route.params.typeId;
            }else{
                console.log(1);
                params.seach = this.$route.query.seach;
            }
            this.$api.loadFilmsList(params)
            .then(({ resultState,result,msg })=>{
                if(!resultState){
                    return Promise.reject(msg);
                }
                this.films = result;
            })
            .catch(this.$error);
        }
    },
    mounted(){
        this.loadFilmsData();
        // console.log(location.search);
        // console.log(this.$route.query);
        // console.log(this.$route.query.typeId);

    }
}
</script>

<style lang="less" scoped>
// 分类页样式
.films-box{
    position: absolute;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    overflow-y: auto;
}
.content-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    width: 100%;
    font-size: 0rem;
    >*{
        margin-top: 0.2rem;
    }
}
</style>