import React, { Component } from 'react'
import './Sidebar.css';

export default class Sidebar extends Component {

  handleButtonClick = (ev) => {
    ev.preventDefault()
    this.props.closeSelection()
  }

  getTotal = (start, end) => {
    if (start && end) {
      return (+end - +start)/1000/60/60/24 + 1
    }
    return 0
  }
  
    
  render() {
    const { start, end } = this.props.selection

    return (
      <div className="sidebar">
        <div className="sidebar__button" onClick={this.handleButtonClick}>Remove selection</div>
        <div className="total">Total days: <span className='number'>{this.getTotal(start, end)}</span></div>
      </div>
    )
  }
}
