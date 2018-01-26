import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftMatched: 0,
      highestSpeed: 0
    }
    this.resetScore = this.resetScore.bind(this)
    this.test = this.test.bind(this)
  }
  render() {
    return (
      <div className="dashboard">
        <div className="brand" onClick={this.test}>
          Memory
        </div>
        <div className="match-info">
          <span>Pairs Left</span>
          <span>To Match</span>
          <span>{ this.state.leftMatched }</span>
        </div>
        <div className="score" onClick={this.resetScore}>
          <span>Highest</span>
          <span>Speed</span>
          <span>{ this.state.highestSpeed }</span>
        </div>
      </div>
    )
  }
  resetScore() {
    console.log('resetScore')
  }
  test() {
    console.log('test')
  }
}

export default Dashboard
