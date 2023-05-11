import { loginAPI } from '@/api/user.js'
import { getToken, setToken, removeToken } from '@/utils/auth.js'
// 与vuex结合,把token持久化
const state = {
  // 初始化vuex的时候,从缓存中读取token
  token: getToken()
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }

}
const actions = {
  async login(context, data) {
    const result = await loginAPI(data) // 拿到token
    context.commit('setToken', result) // 设置token
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters: {}
}
