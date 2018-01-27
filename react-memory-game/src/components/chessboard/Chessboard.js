import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as cardModule from './../../redux/modules/card'
import * as statusModule from './../../redux/modules/status'
import { ROW, COLUMN } from './../../config'
import Card from './Card'

class Chessboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastCardIndex: null
    }
    this.flipEventHandler = this.flipEventHandler.bind(this)
  }
  render() {
    const boxHTML = this.boxRender(this.props.cards)
    return (
      <div className="box">
      { boxHTML }
      </div>
    )
  }
  boxRender(cards) {
    const rowArr = Array(ROW).fill(0)
    const columnArr = Array(COLUMN).fill(0)
    return (
      rowArr.map((item, i) => {
        return (
          <div className="row" key={i}>
          {
            columnArr.map((item,j) => {
              const index = i * COLUMN + j
              return (
                <Card key={j}
                  card={cards[index]}
                  index={index}
                  callback={this.flipEventHandler}/>
              )
            })
          }
          </div>
        )
      })
    )
  }
  setIndexState(val) {
    this.setState({
      lastCardIndex: val
    })
  }
  flipEventHandler(index) {
    const { lastCardIndex } = this.state
    const { status, flipCard, updateStatus, cards } = this.props
    flipCard(index)

    // 若游戏未开始，变为PLAYING状态, 并开启计时器
    if (status !== statusModule.PLAYING) {
      updateStatus(statusModule.PLAYING)
    }
    if (lastCardIndex == null) {
      this.setIndexState(index)
      return
    }
    // 检查是否有一张翻转过来的卡片
    // 若两张卡名字相同，处理匹配
    const card = cards[index].cardName
    const lastCard = cards[lastCardIndex].cardName
    if (card === lastCard) {
      this.setIndexState(null)
      // this.handleMatched(-1)
      return
    }
    // 否则，全部翻转回去
    this.setIndexState(null)
    setTimeout(() => {
      flipCard(lastCardIndex)
      flipCard(index)
    }, 1000)
  }
}

const mapStateToProps = state => {
  return {
    cards: state[cardModule.NAME].cards,
    status: state[statusModule.NAME].status
  }
}
const mapDispatchToProps = dispatch => {
  return {
    flipCard: (index) => dispatch(cardModule.flipCard(index)),
    updateStatus: (status) => dispatch(statusModule.updateStatus(status))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chessboard)
