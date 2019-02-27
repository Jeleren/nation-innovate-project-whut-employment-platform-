import axios from '@/utils/request'

export function fetchSlideShow () {
  return axios.get('/first_page/fetchSlideShow')
}
export function fetchEmployment () {
  return axios.get('/first_page/fetchEmployment')
}
export function fetchCompetition () {
  return axios.get('/first_page/fetchCompetition')
}
export function fetchLaboratory () {
  return axios.get('/first_page/fetchLaboratory')
}
export function fetchProsList () {
  return axios.get('/first_page/fetchProsList')
}
export function fetchFirstPage () {
  return axios.get(`/first_page/`)
}

export function search (data) {
  return axios.post('/search/', data)
}
