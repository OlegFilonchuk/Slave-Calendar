import React, { Component } from 'react'
import './Day.css'

export default class Day extends Component {

  handleClick = (ev) => {
    ev.preventDefault()
    if (this.props.startSelect(this.props.date)) {
      ev.target.classList.add('selected')
    }
  }
  
  render() {
    const { start, end, isHidden, isToday, isFebrFirst, value, date } = this.props
    let isSelected = false

    if (start && end) {
      if ((+start <= +date && end >= +date) /* || (+start >= date && end < date) */) {
        isSelected = true
      }
    }

    if (start && +start === +date) {
      isSelected = true
    }

    const hidden = isHidden ? 'isHidden' : ''
    const today = isToday ? 'isToday' : ''
    const febrFirst = isFebrFirst ? 'isFebrFirst' : ''
    const selected = isSelected ? 'selected' : ''
    const isStart = +start === +date ? 'select-start' : ''
    const isEnd = +end === +date ? 'select-end' : ''

    return (
      <div
        className={`day ${hidden} ${febrFirst} ${selected} ${today} ${isStart} ${isEnd}`}
        onClick={this.handleClick}
        title={isFebrFirst ? 'There started my journey' : isToday ? 'Today' : ''}
      >
        {value}
      </div>
    )
  }
}
