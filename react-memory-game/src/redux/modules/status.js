import * as configs from './../../config'

// constants
export const NAME = 'STATUS'
export const READY = 'ready'
export const PASS = 'pass'
export const PLAYING = 'playing'

export const UPDATE_STATUS = 'update status'

// actions
export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status
  }
}

// initial state
const initState = {
  status: READY,
  elapsed: 0,
  level: 1
}

// reducers
export const reducer = function(state = initState, action) {
  const timer = null
  switch (action.type) {
    case UPDATE_STATUS:
      return Object.assign({}, state, {
        status: action.status
      })
    default:
      return state
  }
}
