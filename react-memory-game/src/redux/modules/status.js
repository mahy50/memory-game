import * as configs from './../../config'
import { getLocalHighestSpeed, setLocalHighestSpeed } from '../../utils/index'

// constants
export const NAME = 'STATUS'
export const READY = 'ready'
export const PASS = 'pass'
export const PLAYING = 'playing'

export const UPDATE_STATUS = 'update status'
export const TIMER_START = 'timer start'
export const TIMER_TICK = 'timer tick'
export const TIMER_STOP = 'timer stop'
export const UPDATE_HIGHEST_SPEED = 'update highest speed'
export const UPDATE_LEFT_MATCHED = 'update left matched'
export const RESET_STATUS = 'reset status'


// actions
export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status
  }
}
export function tick() {
  return { type: TIMER_TICK }
}
export function updateHighestSpeed(speed) {
  return {
    type: UPDATE_HIGHEST_SPEED,
    speed
  }
}
export function updateLeftMatched() {
  return { type: UPDATE_LEFT_MATCHED }
}
export function resetStatus() {
  return { type: RESET_STATUS }
}

// initial state
const initState = {
  status: READY,
  elapsed: 0,
  leftMatched: configs.LEFTMATCHED,
  highestSpeed: getLocalHighestSpeed() || 9999,
  level: 1
}

// reducers
export const reducer = function(state = initState, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return Object.assign({}, state, {
        status: action.status
      })
    case TIMER_TICK:
      return Object.assign({}, state, {
        elapsed: ++state.elapsed
      })
    case UPDATE_HIGHEST_SPEED:
      const { elapsed, highestSpeed } = state
      let tmp = elapsed < highestSpeed ? elapsed : highestSpeed
      setLocalHighestSpeed(tmp)
      return Object.assign({}, state, {
        highestSpeed: action.speed ? action.speed : tmp
      })
    case UPDATE_LEFT_MATCHED:
      return Object.assign({}, state, {
        leftMatched: --state.leftMatched
      })
    case RESET_STATUS:
      return Object.assign({}, state, {
        status: READY,
        elapsed: 0,
        leftMatched: configs.LEFTMATCHED,
        highestSpeed: getLocalHighestSpeed() || 9999,
        level: 1
      })
    default:
      return state
  }
}
