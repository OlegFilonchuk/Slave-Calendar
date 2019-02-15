import React, { Component } from 'react'
import './Day.css'

export default class Day extends Component {
  render() {
    const isHidden = this.props.isHidden ? 'isHidden' : ''
    return (
      <div className={`day ${isHidden}`} >
        {this.props.value}
      </div>
    )
  }
}
