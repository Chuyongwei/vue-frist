<template>
    <!-- 电影详情 start -->
    <div class="detail-box">
        <!-- 电影名称 -->
        <div class="film-name">{{ film.filmName }}</div>
        <!-- 电影信息 stat-->
        <div class="film-info">
            <div class="film-tip">
                <div class="comment-count">
                    <div class="film-source" v-show="film.source">
                        <span class="star-img" v-for="(c, i) in 5" :key="i" :class="  (film.source*1)>=c?'open':'close' "></span>
                        <span class="star-source">{{ film.source | getSource }}</span>
                    </div>
                    <div class="film-source" v-show="!film.source">
                        <span class="star-tip">暂无评分</span>
                    </div>
                    <div class="star-count">{{ film.count }}短评</div>
                </div>
                <div class="film-desc">
                    <p><span>上映时间:</span>{{ film.filmYear }}</p>
                    <p><span>电影类型:</span>{{ film.filmTypes }}</p>
                    <p><span>参演明星:</span>{{ film.castNames }}</p>
                </div>
            </div>
            <div class="film-img" v-preload:cover.bg="film.filmImg"></div>
        </div>
        <!-- 电影信息 end-->
        <!-- 电影简介 start -->
        <div class="film-plot">
            <div class="plot-title">剧情简介</div>
            <div class="plot-content">{{ film.filmDesc }}</div>
        </div>
        <!-- 电影简介 end -->
        <!-- 演员阵容 start -->
        <div class="film-actor">
            <div class="actor-title">导演演员</div>
            <div class="actor-list">
                <div class="actor-item" v-for="(cast, i) in film.castList" :key="i">
                    <div class="actor-img" v-preload:cover.bg="cast.photo"></div>
                    <div class="actor-name">{{ cast.name }}</div>
                </div>
            </div>
        </div>
        <!-- 演员阵容 end -->
        <CommentList :comments="comments"></CommentList>
    </div>
    <!-- 电影详情 end -->
</template>
<script>
import axios from "axios";
import QS from "qs";

import CommentList from "../components/CommentList";
export default {
    components: {
        CommentList
    },
    data() {
        return {
            film: {},
            comments: [],
            params: {
                filmId: 26985127
            }
        };
    },
    methods: {
        loadDetailById() {
            // let urlParams = QS.stringify({
            //     filmId: 26985127
            // });
            let urlParams = QS.stringify(this.params);
            axios
                .post("http://127.0.0.1/filmApi/loadFilmById.php", urlParams)
                .then(({ statusText, data }) => {
                    if (statusText != "OK" || !data.resultState) {
                        return Promise.reject("请求失败");
                    }     
                    data.result.castList = JSON.parse(data.result.castList);
                    this.film = data.result;
                })
                .catch(error => {
                    this.$showMsg(error.message);
                });
        },
        loadCommoneById() {
            axios
                .post(
                    "http://127.0.0.1/filmApi/loadComments.php",
                    QS.stringify(this.params)
                )
                .then(({ statusText, data }) => {
                    if (statusText != "OK" || !data.resultState) {
                        return Promise.reject("请求失败");
                    }
                    this.comments = data.result;
                })
                .catch(error => {
                    this.$showMsg(error.message);
                });
        }
    },
    mounted() {
        this.loadDetailById();
        this.loadCommoneById();
    }
};
</script>
<style lang="less" scoped>
.detail-box {
    position: absolute;
    top: 0rem;
    bottom: @bottomHeight;
    left: 0rem;
    right: 0rem;
    overflow-y: auto;
}
// 详情页样式
.film-name {
    padding: 0.3rem;
    padding-bottom: 0rem;
    font-size: 0.38rem;
    color: @gray-dark;
}
.film-info {
    // css 新布局方式 grid 网格异形布局
    // 浏览器内核已做全面兼容
    color: @gray-dark;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0rem 0.2rem 0.3rem 0.2rem;
    > .film-tip {
        grid-column-start: 1;
        grid-column-end: 2;
        > .comment-count {
            display: grid;
            grid-template-columns: 4fr 2fr;
            margin: 0.2rem 0rem;
            align-items: center;
            > .film-source {
                grid-column-start: 1;
                grid-column-end: 2;
            }
            > .star-count {
                grid-column-start: 2;
                grid-column-end: 3;
                font-size: 0.3rem;
            }
        }
        > .film-desc {
            font-size: 0.26rem;
            height: 2.4rem;
            overflow: hidden;
            padding-right: 0.2rem;
            line-height: 0.5rem;
            > p > span {
                color: @blue;
                padding-right: 0.1rem;
            }
        }
    }
    > .film-img {
        height: 3.4rem;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 4%;
        background-color: @gray-light;
    }
}
.film-plot {
    color: @gray-dark;
    padding: 0rem 0.2rem 0.3rem 0.2rem;
    > .plot-title {
        font-size: 0.36rem;
        color: @gray;
        margin-bottom: 0.2rem;
    }
    > .plot-content {
        font-size: 0.24rem;
        text-indent: 0.56rem;
        line-height: 0.4rem;
    }
}
.film-actor {
    color: @gray-dark;
    padding-bottom: 0.3rem;
    font-size: 0rem;
    > .actor-title {
        font-size: 0.36rem;
        color: @gray;
        padding: 0rem 0.2rem;
        margin-bottom: 0.2rem;
    }
    .actor-list {
        white-space: nowrap;
        width: 100%;
        overflow-x: auto;
        &::after {
            content: "";
            width: 0.2rem;
            display: inline-block;
        }
        > .actor-item {
            width: 1.6rem;
            padding-left: 0.2rem;
            display: inline-block;
            vertical-align: top;
            > .actor-img {
                background-color: @gray-light;
                width: 1.6rem;
                height: 2.2rem;
                background-repeat: no-repeat;
                background-size: cover;
            }
            > .actor-name {
                white-space: pre-wrap;
                margin: 0.1rem 0rem;
                font-size: 0.24rem;
                text-align: center;
            }
        }
    }
}
</style>