import * as types from './../constant'
import { getLocalHighestSpeed, setLocalHighestSpeed, genData } from './../utils'
export default {
  [types.RESETSTATE]: (state) => {
    state.status = types.READY
    state.elapsed = 0
    state.cards = genData(types.LEFTMATCHED)
    state.highestSpeed = getLocalHighestSpeed()
    state.level = types.LEVEL
    state.leftMatched = types.LEFTMATCHED
  },
  [types.RESETCARD]: (state) => {
    state.cards.forEach(card => {
      card.flipped = !types.FLIPPED
    })
  },
  [types.UPDATESTATUS]: (state, payload) => {
    state.status = payload
  },
  [types.UPDATEHEIGHESTSPEED]: (state, payload) => {
    state.highestSpeed = payload
    setLocalHighestSpeed(payload)
  },
  [types.UPDATELEFTMATCHED]: (state, payload) => {
    state.leftMatched += payload
  }
}
