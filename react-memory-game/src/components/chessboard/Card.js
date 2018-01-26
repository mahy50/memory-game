import React, { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardName: '001',
      flipped: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  render() {
    return (
      <div className="container" onClick={this.clickHandler}>
        <div className={this.state.flipped ? 'card flipped' : 'card'}>
            <img className="front"
              src={require(`./../../common/assets/images/${this.state.cardName}.svg`)}
              alt="card"/>
            <img className="back"
              src={require('./../../common/assets/images/back.svg')}
              alt="back"/>
        </div>
      </div>
    )
  }
  clickHandler() {
    this.setState({
      flipped: !this.state.flipped
    })
    console.log(this.state.flipped)
      // if (this.$store.state.status === types.PASS) return
      // if (this.card.flipped === types.FLIPPED) return

      // this.$emit('update:flipped', !this.card.flipped)
      // // 触发 card 翻动事件
      // this.$emit('flipEvent', this.card)
  }
}

export default Card
