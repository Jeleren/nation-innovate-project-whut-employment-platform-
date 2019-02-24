import axios from '@/utils/request'

export function apiChangeUserInfo (id, data) {
  return axios.put(`/api/users/${id}/`, data)
}
