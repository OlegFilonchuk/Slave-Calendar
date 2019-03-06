import React, { Component } from 'react'
import './Sidebar.css';

export default class Sidebar extends Component {

  handleButtonClick = (ev) => {
    ev.preventDefault()
    this.props.closeSelection()
  }
    
  render() {
    return (
      <div className="sidebar">
        <button onClick={this.handleButtonClick}>close selection</button>
        <div>Start {+this.props.selection.start}</div>
      </div>
    )
  }
}
