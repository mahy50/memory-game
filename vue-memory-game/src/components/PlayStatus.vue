<template>
  <div class="status-footer">
    <span>Level {{level}}</span>
    <span class="play-status" v-if="status === types.READY">Ready</span>
    <span class="play-status" v-if="status === types.PLAYING" >Playing</span>
    <span class="play-status pass" v-if="status === types.PASS" @click="reset">Play again</span>
    <span> {{elapsed}} s</span>
  </div>
</template>

<script>
import * as types from './../constant'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      types
    }
  },
  computed: {
    ...mapState(['elapsed', 'level', 'status'])
  },
  methods: {
    ...mapActions({
      reset: types.RESET
    })
  }
}
</script>

<style>

</style>
