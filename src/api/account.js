/*
 * @Description: 账户模块相关API
 */
import {
    post,
    get
} from '@/lib/axios';

/**
 * 登录
 * @param {*} params
 */
const login = params => post('/login', params);

/**
 * 获取账户信息
 * @param {*} params
 */
const getAccountInfo = params => get('/account/info', params);

export {
    login,
    getAccountInfo
}