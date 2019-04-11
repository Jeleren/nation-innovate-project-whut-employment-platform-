import {fetchFanList, fetchFollowList, fetchRecPros, getFollowPros} from '@/api/personal'
import cookie from 'js-cookie'

export const relation = {
  state: {
    followList: {},
    fanList: {},
    followProsList: [],
    recProsList: {},
    totalPageNum: 0
  },
  mutations: {
    SET_FOLLOW_LIST (state, data) {
      state.followList = data
    },
    SET_FAN_LIST (state, data) {
      state.fanList = data
    },
    SET_FOLLOW_PROS_LIST (state, data) {
      state.followProsList = data
    },
    SET_REC_PROS_LIST (state, data) {
      state.recProsList = data
    },
    SET_PAGE_NUM (state, data) {
      state.totalPageNum = data
    }
  },
  actions: {
    getFollowList ({commit}, params) {
      params.id = cookie.get('id')
      fetchFollowList(setUrl(params)).then(res => {
        commit('SET_FOLLOW_LIST', res.data)
      })
    },
    getFanList ({commit}, params) {
      params.id = cookie.get('id')
      fetchFanList(setUrl(params)).then(res => {
        commit('SET_FAN_LIST', res.data)
      })
    },
    getRecProsList ({commit}, params) {
      fetchRecPros(setUrl(params)).then(res => {
        commit('SET_REC_PROS_LIST', res.data)
      })
    },
    getFollowProsList ({commit}, params) {
      getFollowPros(`${cookie.get('id')}/` + setUrl(params)).then(res => {
        commit('SET_FOLLOW_PROS_LIST', res.data)
      })
    }
  }
}
function setUrl (params) {
  let url = '?'
  for (let item in params) {
    url = url + `${item}=${params[item]}&`
  }
  return url
}
