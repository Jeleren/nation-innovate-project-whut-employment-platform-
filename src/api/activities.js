import axios from '../utils/request'

/**
 * 根据动态类型获取动态信息
 * @param type  动态类型
 * @returns {AxiosPromise<any>}
 */
export function getActivityByType (type) {
  return axios.get(`/activities/${type}`)
}

/**
 * 用户对简历动态投递简历
 * @param id  简历id
 * @param data  有关用户信息，可只包含用户id
 * @returns {AxiosPromise<any>}
 */
export function postResume (id, data) {
  return axios.post(`/activities/postResume/${id}`, data)
}

/**
 * 用户创建活动
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function postActivity (data) {
  return axios.post(`/activities/`, data)
}

/**
 * 用户收藏活动
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function collectActivity (data) {
  return axios.post(`/collects/`, data)
}
export function cancelCollectActivity (data) {
  return axios.post(`/cancelCollects/`, data)
}
/**
 * 用户评论活动
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function commentActivity (data) {
  return axios.post(`/comments/`, data)
}

/**
 * 点赞活动
 * @param data 包括 user的id 和 activity的id
 * @returns {AxiosPromise<any>}
 */
export function likeActivity (data) {
  return axios.post(`/like/`, data)
}
export function cancelLikeActivity (data) {
  return axios.post(`/cancelLike`, data)
}

/**
 * 修改动态
 * @param data: id, changeContent
 * @returns {AxiosPromise<any>}
 */
export function changeActivity (data) {
  return axios.post(`/changeActivities`, data)
}

/**
 * 根据职业圈id获取动态
 * @param data: id
 * @returns {AxiosPromise<any>}
 */
export function getActivityByPros (data) {
  return axios.post(`/activitiesByPros/`, data)
}
