// 账户模块|STORE
import store from 'store'
import axios from 'axios'
import router from '@/router'
import { dataCode, tokenName } from '@/conf/config'
import { login } from '@/api/account'
const state = {
  loading: false
}

// getters
const getters = {}

// actions
const actions = {
  // 登录
  async login({ commit, state }, params) {
    state.loading = true
    const result = await login(params)
    state.loading = false
    const { code, data, msg } = result
    if (code === dataCode.successCode) {
      if (data.access_token) {
        commit('setToken', data.access_token)
        router.push('/')
      } else {
        this.$message.error(msg)
      }
    } else {
      this.$message.error(msg)
    }
  }
}

// mutations
const mutations = {
  // 设置身份信息并缓存
  setToken(state, data) {
    state[tokenName] = data
    store.set(tokenName, data)
    axios.defaults.headers[tokenName] = data
  },
  // 清除认证信息
  removeAuthToken(state) {
    state[tokenName] = ''
    store.remove(tokenName)
    axios.defaults.headers[tokenName] = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
