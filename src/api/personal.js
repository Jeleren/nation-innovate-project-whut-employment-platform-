import axios from '../utils/request'

export function fetchActiveList (id) {
  return axios.get(`/active_list/${id}`)
}
export function fetchResume (id) {
  return axios.get(`/resume/${id}`)
}
// 推荐关注
export function fetchRecPros (id) {
  return axios.get(`/recPros/${id}`)
}
export function fetchFollowList (id) {
  return axios.get(`/follow/${id}`)
}
//  获取用户粉丝
export function fetchFanList (id) {
  return axios.get(`/fan/${id}`)
}
export function fetchCollectList (id) {
  return axios.get(`/collect/${id}`)
}

export function changeResume (id, data) {
  return axios.put(`/resume/${id}`, data)
}

