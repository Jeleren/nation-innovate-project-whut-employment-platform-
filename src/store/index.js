import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import pros from './modules/pros'
import {relation} from './modules/relation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    pros,
    relation
  }
})
