import * as configs from './../../config'
import { genData } from './../../utils'

// constants
export const NAME = 'CARD'
export const REST_CARDS = 'reset cards'
export const INIT_CARDS = 'initial cards'
export const FLIP_CARD = 'flip card'

// actions
export function resetCards() {
  return {
    type: REST_CARDS
  }
}
export function initCards() {
  return {
    type: INIT_CARDS
  }
}
export function flipCard(index) {
  return {
    type: FLIP_CARD,
    index
  }
}

// initial states
const initState = {
  cards: []
}

// reducer
export const reducer = function(state = initState, action) {
  switch (action.type) {
    case REST_CARDS:
      // 卡片全部翻转到背面
      return Object.assign({}, state, {
        cards: state.cards.map(item => {
          return {
            cardName: item.cardName,
            flipped: !configs.FLIPPED,
          }
        })
      })
    case INIT_CARDS:
      // 初始化并填充卡片
      return Object.assign({}, state, {
        cards: [...genData(configs.LEFTMATCHED)]
      })
    case FLIP_CARD:
      return Object.assign({}, state, {
        cards: state.cards.map((item, index) => {
          return (index === action.index)
            ? {cardName: item.cardName, flipped: !item.flipped}
            : item
        })
      })
    default:
      return state
  }
}
