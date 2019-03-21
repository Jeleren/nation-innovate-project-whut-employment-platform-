import axios from '../utils/request'
import {api} from './index'

/**
 * 获取对应活动投递的简历
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function getResume (data) {
  return axios.post(`${api}/entResume/`, data)
}

/**
 * 通过简历
 * @param data:
 * @returns {AxiosPromise<any>}
 */
export function passResume (data) {
  return axios.post(`${api}/passResume/`, data)
}
export function rejectResume (data) {
  return axios.post(`${api}/rejectResume/`, data)
}
