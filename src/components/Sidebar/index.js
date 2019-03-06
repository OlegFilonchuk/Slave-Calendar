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
    return 
  }
  
    
  render() {
    const { start, end } = this.props.selection

    return (
      <div className="sidebar">
        <div className="sidebar__button" onClick={this.handleButtonClick}>close selection</div>
        <div>Total {this.getTotal(start, end)} days</div>
      </div>
    )
  }
}
