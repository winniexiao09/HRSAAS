import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器

service.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  // 注入token
  if (store.getters.token) {
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  // config是请求的配置信息, 无论什么时候都要return
  return config
}, function(error) {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    // 弹出错误信息
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, function(error) {
  Message.error(error.message)
  return Promise.reject(error)
})

export default service
