import React, { Component } from 'react'
import './Sidebar.css';

export default class Sidebar extends Component {

  state = {
    seconds: Math.floor((new Date() - new Date(2019, 1))/1000)
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({seconds: Math.floor((new Date() - new Date(2019, 1))/1000)})
    }, 1000)
  }

  handleButtonClick = (ev) => {
    ev.preventDefault()
    this.props.closeSelection()
  }

  getTotal = (start, end) => {
    if (start && end) {
      return Math.abs((+end - +start)/1000/60/60/24) + 1
    }
    return 0
  }

  render() {
    const { start, end } = this.props.selection
    const { seconds } = this.state

    return (
      <div className="sidebar">
        <div className="sidebar__button" onClick={this.handleButtonClick}>Remove selection</div>
        <div className="sidebar-selected">Selected days:</div>
        <div className='number'>{this.getTotal(start, end)}</div>
        <div className="slavery">Slavery started at {new Date(2019, 1).toLocaleDateString()}</div>
        <div className="sidebar-today">Today is <br/>{new Date().toLocaleDateString()}</div>
        <div className="passed">
          <h4>Passed:</h4>
          <ul>
            <li>{} percents</li>
            <li>{seconds} seconds</li>
            <li>{Math.floor(seconds/60)} minutes</li>
            <li>{Math.floor(seconds/60/60)} hours</li>
            <li>{Math.floor(seconds/60/60/24)} days</li>
          </ul>
        </div>
      </div>
    )
  }
}
