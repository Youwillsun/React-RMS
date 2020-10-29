import axios from 'axios';
import { getToken } from './auth';

const instance = axios.create({
    baseURL: 'http://localhost:3009',
    timeout: 5000
});

// 全局请求拦截 请求发送之前执行
instance.interceptors.request.use(function (config) {
    // 为请求添加token
    config.headers['authorization'] = 'Bearer ' + getToken();
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 全局响应拦截 请求返回之后执行
instance.interceptors.response.use(function (response) {
    // 返回响应数据的data
    return response.data;
}, function (error) {
    return Promise.reject(error);
});


/**
 * get请求
 * @param {*} url 请求地址
 * @param {*} params url参数
 */
export function get(url, params) {
    return instance.get(url, {
        params
    })
}

/**
 * post请求
 * @param {*} url 请求地址
 * @param {*} data 数据
 */
export function post(url, data) {
    return instance.post(url, data)
}

/**
 * put请求
 * @param {*} url 请求地址
 * @param {*} data 数据
 */
export function put(url, data) {
    return instance.put(url, data);
}

/**
 * del请求
 * @param {*} url 请求地址
 */
export function del(url) {
    return instance.delete(url);
}