import axios from '@/utils/request'

export function login (params) {
  return axios.post('/api/login/', params)
}
