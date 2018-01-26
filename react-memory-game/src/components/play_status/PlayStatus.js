import React, { Component } from 'react'

class PlayStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsed: 0,
      level: 1
    }
  }
  render() {
    return (
      <div className="status-footer">
        <span>Level {this.state.level}</span>
        { this.StatusRender() }
        <span> {this.state.elapsed} s</span>
      </div>
    )
  }
  StatusRender() {
    const status = 'playing'
    if (status === 'ready') {
      return (<span className="play-status">Ready</span>)
    }
    if (status === 'playing') {
      return (<span className="play-status">Playing</span>)
    }
    if (status === 'pass'){
      return (<span className="play-status pass">Play again</span>)
    }
  }
}

export default PlayStatus
