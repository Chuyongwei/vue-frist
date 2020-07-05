<template>
    <div>
        <!-- 电影展示组件 start -->
        <!-- <div class="film-item" v-for="film in films" :key="film.filmId"> -->
        <!-- <router-link class="film-item" v-for="film in films" :key="film.filmId"
            :to=" '/detail?filmId='+film.filmId " 
            tag="div"
        > -->
        <!-- <router-link class="film-item" v-for="film in films" :key="film.filmId"
            :to=" { path:'/detail',query:{ filmId:film.filmId,aa:'ccc'  } } " 
            tag="div"
        > -->
        <router-link class="film-item" v-for="film in films" :key="film.filmId"
            :to=" { name:'detail',query:{ filmId:film.filmId,aa:'ccc'  } } " 
            tag="div"
        >
            <div class="film-img" v-preload:cover.bg="film.filmImg"></div>
            <div class="film-title">{{ film.filmName }}</div>
            <div class="film-source" v-show="film.source">
                <span class="star-img" v-for="(c, i) in 5" :key="i" :class="  (film.source*1)>=c?'open':'close' "></span>
                <span class="star-source">{{ film.source | getSource }}</span>
            </div>
            <div class="film-source" v-show="!film.source">
                <span class="star-tip">暂无评分</span>
            </div>
        </router-link>
        <!-- </div> -->
        <!-- 电影展示组件 end -->
    </div>
</template>
<script>
export default {
    props: {
        films: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    filters: {
        getSource(value) {
            return (value * 1).toFixed(1);
        }
    }
};
</script>
<style lang="less" scoped>
.film-item {
    width: 2.35rem;
    height: 4.55rem;
    display: inline-block;
    margin-left: 0.1rem;
    vertical-align: top;
    > .film-img {
        height: 3.6rem;
        background-color: @gray-light;
        background-repeat: no-repeat;
        background-size: cover;
    }
    > .film-title {
        font-size: 0.26rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin: 0.1rem;
    }
}
</style>