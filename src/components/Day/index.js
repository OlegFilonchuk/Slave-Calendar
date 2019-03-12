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

    return (
      <div
        className={`day ${hidden} ${today} ${febrFirst} ${selected}`}
        onClick={this.handleClick}
      >
        {value}
      </div>
    )
  }
}
