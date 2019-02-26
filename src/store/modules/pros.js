import { fetchProsList } from '@/api/first_page'
import { fetchActiveList } from '@/api/personal'

const pros = {
  state: {
    prosList: [],
    activeList: []
  },
  mutations: {
    SET_PROS_LIST (state, data) {
      state.prosList = data
    },
    SET_ACTIVE_LIST (state, data) {
      state.activeList = data
    },
    ADD_ACTIVE_ITEM (state, data) {
      let arr = state.activeList
      console.log(arr)
      state.activeList = arr.unshift(data)
    }
  },
  actions: {
    getProsList ({commit}) {
      fetchProsList().then(res => {
        if (res.status) {
          // console.log(res.data)
          commit('SET_PROS_LIST', res.data.prosList)
        }
      })
    },
    getActiveList ({commit}, id) {
      fetchActiveList(id).then(res => {
        // console.log(res)
        if (res.status) {
          commit('SET_ACTIVE_LIST', res.data.activeList)
        }
      })
    }
  }
}

export default pros
