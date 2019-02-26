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

/**
 * 修改简历自定义信息
 * @param data: id, changeContent
 * @returns {AxiosPromise<any>}
 */
export function changeResume (data) {
  return axios.post(`/resumeChange/`, data)
}

/**
 * 修改简历基本信息
 * @param data: id, changeContent
 * @returns {AxiosPromise<any>}
 */
export function changeBaseInfo (data) {
  return axios.post(`/resumeBase/`, data)
}

/**
 * 添加简历信息
 * @param data: id, formData
 * @returns {AxiosPromise<any>}
 */
export function addResumeItem (data) {
  return axios.post(`/resumeAdd/`, data)
}
