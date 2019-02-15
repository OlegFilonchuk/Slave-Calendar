import React, { Component } from 'react'
import './Day.css'

export default class Day extends Component {

    handleClick = (ev) => {
      ev.preventDefault()
      alert(this.props.date)
    }
    
    render() {
    const isHidden = this.props.isHidden ? 'isHidden' : ''
    return (
      <div
        className={`day ${isHidden}`}
        onClick={this.handleClick}
      >
        {this.props.value}
      </div>
    )
  }
}
