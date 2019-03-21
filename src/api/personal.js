import axios from '../utils/request'
import {api} from './index'

export function fetchActiveList (url) {
  return axios.get(`${api}/active_list/${url}/`)
}
export function fetchResume () {
  return axios.get(`${api}/resume/`)
}
// 推荐关注
export function fetchRecPros () {
  return axios.get(`${api}/recPros/`)
}
export function recProsFollow (data) {
  return axios.post(`${api}/recProsFollow/`, data)
}
export function recProsCancelFollow (data) {
  return axios.post(`${api}/recProsCancelFollow/`, data)
}
export function getFollowPros (url) {
  return axios.get(`${api}/followPros/${url}`)
}
export function fetchFollowList (url) {
  return axios.get(`${api}/follow/${url}`)
}
//  获取用户粉丝
export function fetchFanList (url) {
  return axios.get(`${api}/fan/${url}`)
}
export function fetchCollectList (url) {
  return axios.get(`${api}/collect/${url}`)
}

/**
 * 修改简历自定义信息
 * @param data: id, changeContent
 * @returns {AxiosPromise<any>}
 */
export function changeResume (data) {
  return axios.post(`${api}/resumeChange/`, data)
}

/**
 * 修改简历基本信息
 * @param data: id, changeContent
 * @returns {AxiosPromise<any>}
 */
export function changeBaseInfo (data) {
  return axios.post(`${api}/resumeBase/`, data)
}

/**
 * 修改简历图片
 * @param data: id image
 * @returns {AxiosPromise<any>}
 */
export function changeResumeImage (data) {
  return axios.post(`${api}/resumeImage/`, data)
}

/**
 * 添加简历信息
 * @param data: id, formData
 * @returns {AxiosPromise<any>}
 */
export function addResumeItem (data) {
  return axios.post(`${api}/resumeAdd/`, data)
}

/**
 * 删除简历信息
 * @param data: id
 * @returns {AxiosPromise<any>}
 */
export function deleteResumeItem (data) {
  return axios.post(`${api}/resumeDelete/`, data)
}
