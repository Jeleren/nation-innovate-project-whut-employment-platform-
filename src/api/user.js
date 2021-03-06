import axios from '@/utils/request'
import {api} from './index'

export function apiChangeUserInfo (data) {
  return axios.post(`${api}/users/`, data)
}
export function apiGetUserInfoById (id) {
  return axios.get(`${api}/users/${id}/`)
}

/**
 * 关注 某个用户
 * @param data 两个字段 user_id: 关注发起者id; target_id: 被关注用户id
 * @returns {AxiosPromise<any>} 返回关系id
 */
export function doFollow (data) {
  return axios.post(`${api}/doFollow/`, data)
}

/**
 * 取消关注
 * @param data 参数同上
 * @returns {AxiosPromise<any>}
 */
export function cancelFollow (data) {
  return axios.post(`${api}/cancelFollow/`, data)
}
