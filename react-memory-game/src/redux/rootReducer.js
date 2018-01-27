import { combineReducers } from 'redux'
import {} from 'redux-thunk'
import * as card from './modules/card'
import * as status from './modules/status'

const memoryGame = combineReducers({
  [card.NAME]: card.reducer,
  [status.NAME]: status.reducer
})

export default memoryGame
