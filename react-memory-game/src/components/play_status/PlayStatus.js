import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statusModule from './../../redux/modules/status'
import  * as cardModule from './../../redux/modules/card'

class PlayStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsed: 0,
      level: 1
    }
  }
  render() {
    const { level, elapsed } = this.props
    return (
      <div className="status-footer">
        <span>Level {level}</span>
        { this.StatusRender() }
        <span> {elapsed} s</span>
      </div>
    )
  }
  StatusRender() {
    const { status } = this.props
    if (status === statusModule.READY) {
      return (<span className="play-status">Ready</span>)
    }
    if (status === statusModule.PLAYING) {
      return (<span className="play-status">Playing</span>)
    }
    if (status === statusModule.PASS){
      return (<span className="play-status pass">Play again</span>)
    }
  }
}

const mapStateToProps = state => {
  return {
    status: state[statusModule.NAME].status,
    elapsed: state[statusModule.NAME].elapsed,
    level: state[statusModule.NAME].level
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayStatus)

