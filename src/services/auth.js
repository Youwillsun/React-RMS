import { post } from '../utils/request';

/**
 * 用户登录
 * @param {*} user 登录数据
 * @desc user 包括 username 和 password
 */
export function loginApi(user) {
    return post('/api/v1/auth/manager_login',user);
}