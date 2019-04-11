import axios from '../utils/request'
import {api} from './index'
/**
 *  根据动态类型，用户id，职业圈id获取动态
 * @param data: type, user_id, pros_id
 * @returns {AxiosPromise<any>}
 */
export function getActivity (data) {
  return axios.get(`${api}/activities/${data}`)
}

/**
 * 用户对简历动态投递简历
 * @param id  简历id
 * @param data  有关用户信息，可只包含用户id
 * @returns {AxiosPromise<any>}
 */
export function postResume (data) {
  return axios.post(`${api}/activities/postResume/`, data)
}

/**
 * 用户创建活动
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function postActivity (data) {
  return axios.post(`${api}/activities/`, data)
}
export function createImage (data) {
  return axios.post(`${api}/images/`, data)
}

/**
 * 用户收藏活动
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function collectActivity (data) {
  return axios.post(`${api}/collects/`, data)
}
export function cancelCollectActivity (data) {
  return axios.post(`/api/cancelCollects/`, data)
}
/**
 * 用户评论活动
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function commentActivity (data) {
  return axios.post(`${api}/comments/`, data)
}

/**
 * 点赞活动
 * @param data 包括 user的id 和 activity的id
 * @returns {AxiosPromise<any>}
 */
export function likeActivity (data) {
  return axios.post(`${api}/like/`, data)
}
export function cancelLikeActivity (data) {
  return axios.post(`${api}/cancelLike/`, data)
}

/**
 * 修改动态
 * @param data: id, changeContent
 * @returns {AxiosPromise<any>}
 */
export function changeActivity (data) {
  return axios.post(`${api}/changeActivities/`, data)
}

/**
 * 删除动态
 * @param data: 用户id，动态id
 * @returns {AxiosPromise<any>}
 */
export function deleteActivity (data) {
  return axios.post(`${api}/deleteActivities/`, data)
}

/**
 * 根据职业圈id获取动态
 * @param data: id
 * @returns {AxiosPromise<any>}
 */
export function getActivityByPros (data) {
  return axios.post(`${api}/activitiesByPros/`, data)
}

/**
 * 根据类型和职业圈获取动态
 * @param data: id, type
 * @returns {AxiosPromise<any>}
 */
export function getActivityByTypePros (data) {
  return axios.post(`/activitiesByTypePros/`, data)
}
