import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard'
import Chessboard from './components/chessboard/Chessboard'
import PlayStatus from './components/play_status/PlayStatus'
import { connect } from 'react-redux'
import { initCards } from './redux/modules/card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="game-panel"
        onDragStart={(e) => { e.preventDefault() }}
        onContextMenu={(e) => { e.preventDefault() }}
      >
        <Dashboard/>
        <Chessboard/>
        <PlayStatus/>
      </div>
    )
  }
  componentWillMount() {
    this.props.initCards()
  }
}
const mapDispatchToProps = dispatch => {
  return {
    initCards: () => dispatch(initCards())
  }
}
export default connect(
  null,
  mapDispatchToProps
)(App)
