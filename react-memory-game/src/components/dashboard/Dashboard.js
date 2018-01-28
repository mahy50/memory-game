import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statusModule from './../../redux/modules/status'
import * as configs from './../../config'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftMatched: 0,
      highestSpeed: 0
    }
    this.resetScore = this.resetScore.bind(this)
  }
  render() {
    const { leftMatched, highestSpeed} = this.props
    return (
      <div className="dashboard">
        <div className="brand">
          Memory
        </div>
        <div className="match-info">
          <span>Pairs Left</span>
          <span>To Match</span>
          <span>{ leftMatched }</span>
        </div>
        <div className="score" onClick={this.resetScore}>
          <span>Highest</span>
          <span>Speed</span>
          <span>{ highestSpeed }</span>
        </div>
      </div>
    )
  }
  resetScore() {
    if (window.confirm('Are you sure you want to reset the score?')) {
      this.props.updateHighestSpeed(9999)
      localStorage.removeItem(configs.LOCALSTORAGESTRING)
    }
  }
}

const mapStateToProps = state => {
  return {
    leftMatched: state[statusModule.NAME].leftMatched,
    highestSpeed: state[statusModule.NAME].highestSpeed
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateHighestSpeed: (speed) => dispatch(statusModule.updateHighestSpeed(speed))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

