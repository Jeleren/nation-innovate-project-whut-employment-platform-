import { login, getUserInfoById } from '@/api/log_reg'
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
      state.otherUser = data
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
            console.log(decodeRes)
            commit('SET_LOG_STATE', true)
            commit('SET_USER_INFO', decodeRes)
            Cookies.set('user_id', decodeRes.user_id)
            Cookies.set('token', res.data.token)
            resolve()
          } else {
            reject(res.error)
          }
        })
      })
    },
    getSelfInfo ({state, commit}) {
      return new Promise((resolve, reject) => {
        let id = Cookies.get('user_id')
        if (id) {
          getUserInfoById(Cookies.get('user_id')).then(res => {
            if (res.status === 200) {
              console.log(res.data)
              commit('SET_USER_INFO', res.data)
              resolve()
            }
          })
        } else { reject(new Error('no user id')) }
      })
    },
    getUserInfoById ({state, commit}, id) {
      return new Promise((resolve, reject) => {
        getUserInfoById(id).then(res => {
          console.log(res.data)
          commit('SET_IS_SELF', false)
          commit('SET_SHOW_USER', res.data)
          resolve()
        })
      })
    }
  }
}
export default user
