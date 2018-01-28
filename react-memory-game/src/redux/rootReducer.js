import { combineReducers } from 'redux'

import * as card from './modules/card'
import * as status from './modules/status'

const memoryGame = combineReducers({
  [card.NAME]: card.reducer,
  [status.NAME]: status.reducer
})

export default memoryGame
