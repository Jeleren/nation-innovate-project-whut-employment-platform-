import { fetchProsList } from '@/api/first_page'
import { fetchActiveList } from '@/api/personal'
import {getActivity} from '@/api/activities'

const pros = {
  state: {
    prosList: [],
    activeList: [],
    comList: [],
    empList: [],
    labList: []
  },
  mutations: {
    SET_PROS_LIST (state, data) {
      state.prosList = data
    },
    SET_ACTIVE_LIST (state, data) {
      state.activeList = data
    },
    ADD_ACTIVE_ITEM (state, data) {
      state.activeList.splice(0, 0, data)
    },
    DELETE_ACTIVE_ITEM (state, data) {
      state.activeList.splice(data.index, 1)
    },
    SET_COM_LIST (state, data) {
      state.comList = data
    },
    SET_EMP_LIST (state, data) {
      state.empList = data
    },
    SET_LAB_LIST (state, data) {
      state.labList = data
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
    },
    getComList ({commit}, data) {
      getActivity(data).then(res => {
        if (res.data) {
          commit('SET_COM_LIST', res.data.comList.map(item => { item.date = item.startDate + '至' + item.endDate; return item }))
        }
      })
    }
  }
}

export default pros
