<template>
  <div class="dashboard">
    <div class="brand" @click="test">
      Memory
    </div>
    <div class="match-info">
      <span>Pairs Left</span>
      <span>To Match</span>
      <span>{{leftMatched}}</span>
    </div>
    <div class="score" @click="resetScore">
      <span>Highest</span>
      <span>Speed</span>
      <span>{{highestSpeed}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from './../constant'
export default {
  data () {
    return {
      left: 7
    }
  },
  computed: {
    ...mapState(['leftMatched', 'highestSpeed'])
  },
  methods: {
    resetScore () {
      if (confirm('Are you sure you want to reset the score?')) {
        this.$store.commit(types.UPDATEHEIGHESTSPEED, 9999)
        localStorage.removeItem(types.LOCALSTORAGESTRING)
      }
    },
    test () {
      console.log(types.GAMESTATUSACTION)
      this.$store.dispatch(types.GAMESTATUSACTION, types.PASS)
      this.$store.commit(types.UPDATELEFTMATCHED, this.left)
      this.left--
    }
  }
}
</script>
