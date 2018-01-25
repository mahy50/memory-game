import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import * as types from './../constant'
import { getLocalHighestSpeed } from './../utils'

Vue.use(Vuex)

const state = {
  status: types.READY,
  elapsed: 0,
  cards: [],
  highestSpeed: getLocalHighestSpeed(),
  level: types.LEVEL,
  leftMatched: types.LEFTMATCHED
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
