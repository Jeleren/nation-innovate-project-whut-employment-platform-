import axios from '@/utils/request'

export function login (params) {
  return axios.post('/api/login/', params)
}

export function getUserInfoById (id) {
  return axios.get(`/userInfo/?id=${id}`)
}
