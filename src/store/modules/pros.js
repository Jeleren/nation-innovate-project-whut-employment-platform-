import {fetchProsList, search} from '@/api/first_page'
import {getActivity} from '@/api/activities'
import {fetchActiveList, fetchCollectList} from '@/api/personal'
import cookie from 'js-cookie'

const pros = {
  state: {
    prosList: [],
    followProsList: [],
    activeList: [],
    comList: [],
    empList: [],
    labList: [],
    collectList: [],
    totalPageNum: 0,
    searchText: ''
  },
  mutations: {
    SET_PROS_LIST (state, data) {
      state.prosList = data
    },
    SET_ACTIVE_LIST (state, data) {
      state.activeList = data
    },
    ADD_ACTIVE_ITEM (state, data) {
      console.log(data)
      data.time = data.time.split('.')[0]
      state.activeList.unshift(data)
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
    },
    SET_FOLLOW_PROS_LIST (state, data) {
      state.followProsList = data
    },
    SET_TOTAL_PAGE_NUM (state, data) {
      state.totalPageNum = data
    },
    SET_COLLECT_LIST (state, data) {
      state.collectList = data
    },
    SET_SEARCH_TEXT (state, data) {
      state.searchText = data
    }
  },
  actions: {
    getProsList ({commit}) {
      fetchProsList().then(res => {
        if (res) {
          res.data.prosList.unshift({pro: '全部', id: 0})
          res.data.prosList.map(item => {
            let child = item.child
            if (child) {
              child.unshift({pro: '全部', id: 0})
            }
            return item
          })
          commit('SET_PROS_LIST', res.data.prosList)
        }
      })
    },
    getActiveList ({state, commit}, params) {
      getActivity(setUrl(params)).then(res => {
        if (res) {
          switch (params.type) {
            case 1: {
              res.data.comList.map((item) => {
                item.start_time = item.start_time.split(' ')[0]
                item.end_time = item.end_time.split(' ')[0]
                return item
              })
              commit('SET_COM_LIST', res.data.comList.map(item => { item.date = item.start_time + '至' + item.end_time; return item }))
              break
            }
            case 2: {
              commit('SET_ACTIVE_LIST', res.data.activeList.map((item) => {
                item.time = item.time.split('.')[0]
                return item
              }))
              break
            }
            case 3: {
              commit('SET_LAB_LIST', res.data.labList)
              break
            }
            case 4: {
              res.data.empList.map(item => {
                item.endDate = item.endDate.split(' ')[0]
                return item
              })
              commit('SET_EMP_LIST', res.data.empList)
            }
          }
          if (state.totalPageNum !== res.data.num) {
            commit('SET_TOTAL_PAGE_NUM', res.data.num)
          }
        }
      })
    },
    /**
     * params is FormData
     * @param commit
     * @param state
     * @param params
     */
    search ({commit, state}, params) {
      search(params).then(res => {
        if (res) {
          switch (parseInt(params.get('type'))) {
            case 1: {
              res.data.comList.map((item) => {
                item.start_time = item.start_time.split(' ')[0]
                item.end_time = item.end_time.split(' ')[0]
                return item
              })
              commit('SET_COM_LIST', res.data.comList.map(item => { item.date = item.start_time + '至' + item.end_time; return item }))
              break
            }
            case 2: {
              console.log(res.data)
              commit('SET_ACTIVE_LIST', res.data.activeList.map((item) => {
                item.time = item.time.split('.')[0]
                return item
              }))
              break
            }
            case 3: {
              commit('SET_LAB_LIST', res.data.labList)
              break
            }
            case 4: {
              res.data.empList.map(item => {
                item.endDate = item.endDate.split(' ')[0]
                return item
              })
              commit('SET_EMP_LIST', res.data.empList)
            }
          }
          if (state.totalPageNum !== res.data.num) {
            state.totalPageNum = res.data.num
          }
        }
      })
    },
    getSelfActiveList ({commit}, params) {
      // params.id = cookie.get('id')
      params.type = 2
      if (!params.num) {
        params.num = 5
      }
      let url = '?'
      for (let item in params) {
        url = url + `${item}=${params[item]}&`
      }
      fetchActiveList(url).then(res => {
        res.data.activeList.map(item => {
          item.time = item.time.split('.')[0]
          return item
        })
        commit('SET_ACTIVE_LIST', res.data.activeList)
        commit('SET_TOTAL_PAGE_NUM', res.data.num)
      })
    },
    getCollectList ({commit}, params) {
      params.id = cookie.get('id')
      params.type = 2
      if (!params.num) {
        params.num = 5
      }
      let url = '?'
      for (let item in params) {
        url = url + `${item}=${params[item]}&`
      }
      fetchCollectList(url).then(res => {
        res.data.collectList.map(item => {
          item.time = item.time.split('.')[0]
          return item
        })
        commit('SET_COLLECT_LIST', res.data.collectList)
        commit('SET_TOTAL_PAGE_NUM', res.data.num)
      })
    }
  }
}

export default pros
function setUrl (params) {
  let url = '?'
  for (let item in params) {
    url = url + `${item}=${params[item]}&`
  }
  return url
}
