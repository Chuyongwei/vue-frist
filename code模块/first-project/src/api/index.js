
import QS from 'qs';
import axios from 'axios';

// 通过脚手架项目转换模式变量，判断在不同模式下请求地址前缀不同
const mode = {
    "development":"/api",
    "production":"http://127.0.0.1:80",
    "test":"",
    "unit":""
}
// const baseUrl = mode[process.env.NODE_ENV];
// 为所有没有以 http 开头的地址 定义统一的 请求前缀
axios.defaults.baseURL = mode[process.env.NODE_ENV];

// 统一管理请求地址
const URLS = {
    // loadTypes: "http://127.0.0.1/filmApi/loadTyps.php",
    // loadFilms: "http://127.0.0.1/filmApi/loadFilms.php",
    // loadDetail: "http://127.0.0.1/filmApi/loadFilmById.php",
    // loadCommone: "http://127.0.0.1/filmApi/loadComments.php",
    // addCommone: "http://127.0.0.1/filmApi/addComment.php"
    loadTypes: "/filmApi/loadTyps.php",
    loadFilms: "/filmApi/loadFilms.php",
    loadDetail: "/filmApi/loadFilmById.php",
    loadCommone: "/filmApi/loadComments.php",
    addCommone: "/filmApi/addComment.php"
}
// 统一管理请求参数
let objectToUrlParams = function (obj) {
    return QS.stringify(obj);
}
let objectToFormData = function (obj) {
    let fd = new FormData();
    for (const key in obj) {
        fd.append(key, obj[key]);
    }
    return fd;
}
let error = function (error) {
    showMsg(error.message); // 调用定义在 window 下的全局统一提示插件
}
// 统一管理请求模式
// 统一管理请求结果
//      只管理和后台无法的请求状态，而不管理后台的相关数据
let loadTypesList = function () {
    return axios.get(URLS.loadTypes)
        .then(({ statusText, data }) => {
            if (statusText != "OK") {
                return Promise.reject("网络不通");
            }
            return data;
        })
        .catch(error);
}
let loadFilmsList = function (params) {
    return axios.post(URLS.loadFilms, objectToUrlParams(params))
        .then(({ statusText, data }) => {
            if (statusText != "OK") {
                return Promise.reject("网络不通");
            }
            return data;
        })
        .catch(error);
}
let loadFilmsDeatil = function (params) {
    return axios.get(URLS.loadDetail, {
        params: params
    }).then(({ statusText, data }) => {
        if (statusText != "OK") {
            return Promise.reject("网络不通");
        }
        return data;
    })
        .catch(error);
}
let loadFilmsCommone = function (params) {
    return axios.get(URLS.loadCommone, {
        params: params
    }).then(({ statusText, data }) => {
        if (statusText != "OK") {
            return Promise.reject("网络不通");
        }
        return data;
    })
        .catch(error);
}
let addFilmsCommone = function (params) {
    return axios.post(URLS.addCommone, objectToUrlParams(params))
        .then(({ statusText, data }) => {
            if (statusText != "OK") {
                return Promise.reject("网络不通");
            }
            return data;
        })
        .catch(error);
}

export default {
    install: function (Vue) {
        Vue.prototype.$api = {
            loadTypesList,loadFilmsList,loadFilmsDeatil,loadFilmsCommone,addFilmsCommone
        }
        Vue.prototype.$error = error;
    },
    loadTypesList,
    loadFilmsList,
    loadFilmsDeatil,
    loadFilmsCommone,
    addFilmsCommone
}