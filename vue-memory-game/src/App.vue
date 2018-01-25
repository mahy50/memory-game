<template>
  <div class="game-panel"
    ondragstart="return false;"
    oncontextmenu="return false;"
    onselectstart="return false;"
    onselect="document.selection.empty();"
  >
    <dashboard></dashboard>
    <chessboard></chessboard>
    <play-status></play-status>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard'
import Chessboard from './components/Chessboard'
import PlayStatus from './components/PlayStatus'
export default {
  components: {
    Dashboard,
    Chessboard,
    PlayStatus
  },
  methods: {}
}
</script>
