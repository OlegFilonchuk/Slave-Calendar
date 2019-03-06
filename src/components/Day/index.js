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
    const isHidden = this.props.isHidden ? 'isHidden' : ''
    const isToday = this.props.isToday ? 'isToday' : ''
    return (
      <div
        className={`day ${isHidden} ${isToday}`}
        onClick={this.handleClick}
      >
        {this.props.value}
      </div>
    )
  }
}
