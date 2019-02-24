import axios from '@/utils/request'

export function api_changeUserInfo (id, data) {
  return axios.put(`/api/users/${id}/`, data)
}
