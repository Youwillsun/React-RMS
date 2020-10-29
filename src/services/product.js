import { get, post, put, del } from '../utils/request';

/**
 * 创建数据
 * @param {*} page 页码 
 */
export function listApi(page = 1) {
    return get('/api/v1/admin/products', { page, per: 2 });
}

/**
 * 创建数据
 * @param {*} data 数据 
 */
export function createApi(data) {
    return post('/api/v1/admin/products', data);
}

/**
 * 根据id获取一条数据
 * @param {*} id 数据id
 */
export function getOneById(id) {
    return get(`/api/v1/admin/products/${id}`)
}

/**
 * 修改数据
 * @param {*} id 数据标识
 * @param {*} data 数据
 */
export function modifyOne(id, data) {
    return put(`/api/v1/admin/products/${id}`, data);
}

/**
 * 删除数据
 * @param {*} id 数据标识 
 * @param {*} data 数据
 */
export function delOne(id) {
    return del(`/api/v1/admin/products/${id}`);
}