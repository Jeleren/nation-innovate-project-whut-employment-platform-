import axios from '../utils/request'

export function fetchActiveList (id) {
  return axios.get(`/active_list/?id=${id}`)
}
export function fetchResume (id) {
  return axios.get(`/resume/?id=${id}`)
}
export function fetchRecPros (id) {
  return axios.get(`/recPros/?id=${id}`)
}
