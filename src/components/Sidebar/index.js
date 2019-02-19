import React, { Component } from 'react'
import './Sidebar.css';

export default class Sidebar extends Component {

  handleButtonClick = (ev) => {
    ev.preventDefault()
    this.props.closeSelection()
    console.log('selection closed')
  }
    
  render() {
    return (
      <div className="sidebar">
        Sidebar
        <button onClick={this.handleButtonClick}>close selection</button>
      </div>
    )
  }
}
