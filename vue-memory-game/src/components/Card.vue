<template>
  <div class="container" @click="clickHandler">
    <div class="card" :class="{ flipped: card.flipped }">
        <img class="front" :src="src"/>
        <img class="back" src="../../static/images/back.svg"/>
    </div>
  </div>
</template>

<script>
import * as types from './../constant'
export default {
  data () {
    return {
      flipped: true
    }
  },
  props: {
    card: {
      type: Object
    }
  },
  computed: {
    src () {
      return `../../static/images/${this.card.cardName}.svg`
    }
  },
  methods: {
    clickHandler () {
      if (this.$store.state.status === types.PASS) return
      if (this.card.flipped === types.FLIPPED) return

      this.$emit('update:flipped', !this.card.flipped)
      // 触发 card 翻动事件
      this.$emit('flipEvent', this.card)
    }
  }
}
</script>
