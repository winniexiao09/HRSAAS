import request from '@/utils/request'

export function loginAPI(data) {
  return request({
    url: '/api/sys/login',
    method: 'POST',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '',
    method: 'post'
  })
}
