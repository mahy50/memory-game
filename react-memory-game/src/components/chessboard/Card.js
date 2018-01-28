import React, { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }
  render() {
    const card = this.props.card
    // debugger
    return (
      <div className="container" onClick={this.clickHandler}>
        <div className={card.flipped ? 'card flipped' : 'card'}>
            <img className="front"
              src={require(`./../../common/assets/images/${card.cardName}.svg`)}
              alt="card"/>
            <img className="back"
              src={require('./../../common/assets/images/back.svg')}
              alt="back"/>
        </div>
      </div>
    )
  }
  clickHandler(e) {
    const { callback, index, card } = this.props
    if (card.flipped) return
    callback(index)
  }
}

export default Card
