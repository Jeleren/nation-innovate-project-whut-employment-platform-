import axios from '../utils/request'

/**
 * 获取对应活动投递的简历
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function getResume (data) {
  return axios.post(`/entResume/`, data)
}

/**
 * 通过简历
 * @param data:
 * @returns {AxiosPromise<any>}
 */
export function passResume (data) {
  return axios.post(`/passResume/`, data)
}
export function rejectResume (data) {
  return axios.post(`/rejectResume/`, data)
}
