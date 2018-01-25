import * as types from './../constant'
let timer = null

export default {
  // 先想卡片翻转，延迟1s初始化数据
  [types.RESET]: ({commit}) => {
    commit(types.RESETCARD)
    setTimeout(() => {
      commit(types.RESETSTATE)
    }, 1000)
  },
  // 处理所有游戏状态变更
  [types.GAMESTATUSACTION]: ({commit, state}, payload) => {
    commit(types.UPDATESTATUS, payload)
    if (payload === types.PLAYING) {
      timer = setInterval(() => {
        state.elapsed += 1
      }, 1000)
    }
    if (payload === types.PASS) {
      clearInterval(timer)
      let { highestSpeed, elapsed } = state
      if (elapsed && elapsed < highestSpeed) {
        // commit 最短时间，并存入本地，或上传远程接口
        commit(types.UPDATEHEIGHESTSPEED, elapsed)
      }
    }
  }
}
