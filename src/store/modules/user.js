import { login } from '@/api/log_reg'
import {apiChangeUserInfo, apiGetUserInfoById} from '@/api/user'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

const user = {
  state: {
    isLogin: 'true',
    userInfo: {},
    showUser: {},
    isSelf: true
  },
  mutations: {
    SET_LOG_STATE (state, data) {
      state.isLogin = data
    },
    SET_USER_INFO (state, data) {
      state.userInfo = data
    },
    SET_SHOW_USER (state, data) {
      state.showUser = data
    },
    SET_IS_SELF (state, data) {
      state.isSelf = data
    }
  },
  actions: {
    login ({state, commit}, params) {
      return new Promise((resolve, reject) => {
        login(params).then(res => {
          if (res.status === 200) {
            let decodeRes = jwt.decode(res.data.token)
            commit('SET_LOG_STATE', true)
            let id = decodeRes.user_id
            Cookies.set('id', decodeRes.user_id, 7)
            Cookies.set('token', res.data.token, 7)
            this.dispatch('getSelfInfo', id).then((res) => {
              resolve(res)
            })
          } else {
            reject(res.error)
          }
        })
      })
    },
    getSelfInfo ({state, commit}, id) {
      return new Promise((resolve, reject) => {
        apiGetUserInfoById(id).then(res => {
          if (res.status === 200) {
            commit('SET_USER_INFO', res.data)
            resolve(res.data.identity)
          } else { reject(new Error('get user info fail')) }
        })
      })
    },
    getInfo ({state, commit}, data) {
      return new Promise((resolve, reject) => {
        apiGetUserInfoById(data.id).then(res => {
          if (res.data) {
            console.log(res.data)
            commit('SET_SHOW_USER', res.data)
            commit('SET_IS_SELF', false)
            resolve()
          } else {
            reject(new Error())
          }
        })
      })
    },
    changeUserInfo ({commit}, data) {
      return new Promise((resolve, reject) => {
        apiChangeUserInfo(data).then(res => {
          if (res) {
            commit('SET_USER_INFO', res.data)
            resolve()
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default user
