import axios from '@/utils/request'
import {api} from './index'

export function login (params) {
  return axios.post(`${api}/login/`, params)
}
export function register (data) {
  return axios.post(`${api}/register/`, data)
}
