<template>
  <div class="box">
    <div class="row" v-if='cards.length' v-for="(r, i) in Array(row)" :key="i">
      <card class="item" v-for="(t, j) in Array(column)" :key="j"
        :flipped.sync="_cardItem(i, j).flipped"
        :card="_cardItem(i, j)"
        @flipEvent="flipEventHandler"
      >
      </card>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import { mapState, mapMutations, mapActions } from 'vuex'
import * as types from './../constant'

export default {
  data () {
    return {
      row: types.ROW,
      column: types.COLUMN,
      lastCard: null
    }
  },
  components: {
    Card
  },
  computed: mapState(['cards', 'status', 'leftMatched']),
  methods: {
    ...mapMutations({
      reset: types.RESETSTATE,
      updatedLeftMatched: types.UPDATELEFTMATCHED
    }),
    ...mapActions({
      gameStatusAction: types.GAMESTATUSACTION
    }),
    _cardItem (r, i) {
      let index = r * this.column + i
      return this.cards[index]
    },
    handleMatched (val) {
      this.updatedLeftMatched(val)
      if (this.leftMatched === 0) {
        this.gameStatusAction(types.PASS)
      }
    },
    flipCardBack (cards) {
      if (!Array.isArray(cards)) return
      cards.forEach(item => {
        item.flipped = !types.FLIPPED
      })
    },
    flipEventHandler (card) {
      const { status, gameStatusAction, flipCardBack } = this
      // 若游戏未开始，变为PLAYING状态, 并开启计时器
      if (status !== types.PLAYING) {
        gameStatusAction(types.PLAYING)
      }
      // 检查是否有一张翻转过来的卡片
      if (this.lastCard == null) {
        this.lastCard = card
        return
      }
      // 若两张卡名字相同，处理匹配
      if (card.cardName === this.lastCard.cardName) {
        this.lastCard = null
        this.handleMatched(-1)
        return
      }
      // 否则，全部翻转回去
      let lastCard = this.lastCard
      this.lastCard = null
      setTimeout(() => {
        flipCardBack([lastCard, card])
      }, 1000)
    }
  },
  created () {
    this.reset()
  }
}
</script>
