import React, { Component } from 'react'
import Card from './Card'

class Chessboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [1, 2, 3, 4, 5]
    }
    this.flipEventHandler = this.flipEventHandler.bind(this)
  }
  render() {
    return (
      <div className="box">
        <div className="row">
        {
          this.state.data.map((item,index) => {
            return (
              <Card callback={this.flipEventHandler} key={index}/>
            )
          })
        }
        </div>
        <div className="row">
        {
          this.state.data.map((item,index) => {
            return (
              <Card callback={this.flipEventHandler} key={index}/>
            )
          })
        }
        </div>
        <div className="row">
        {
          this.state.data.map((item,index) => {
            return (
              <Card callback={this.flipEventHandler} key={index}/>
            )
          })
        }
        </div>
      </div>
    )
  }
  flipEventHandler() {
    console.log('handler')
  }
}

export default Chessboard
