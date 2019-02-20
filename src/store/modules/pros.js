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
      state.activeList.splice(1, 0, data)
    }
  },
  actions: {
    getProsList ({commit}) {
      fetchProsList().then(res => {
        if (res.status) {
          console.log(res.data)
          commit('SET_PROS_LIST', res.data.prosList)
        }
      })
    },
    getActiveList ({commit}, id) {
      fetchActiveList(id).then(res => {
        if (res.status) {
          commit('SET_ACTIVE_LIST', res.data)
        }
      })
    }
  }
}

export default pros