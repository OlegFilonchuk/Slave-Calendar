import React, { Component } from 'react'
import './Sidebar.css';

export default class Sidebar extends Component {

  state = {
    passed: Math.floor((new Date() - new Date(2019, 1))/1000), // diff between slaveStart and now
    remain: Math.ceil((new Date(2022, 0, 31) - new Date())/1000) // diff between slaveEnd and now
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        passed: Math.floor((new Date() - new Date(2019, 1))/1000),
        remain: Math.ceil((new Date(2022, 0, 31) - new Date())/1000)
      })
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
    const a = 31622400
    const b = 2635200
    const c = 86400
    const d = 3600
    const e = 60
    const { start, end } = this.props.selection
    const { passed, remain } = this.state
    const totalSeconds = Math.floor((new Date(2022, 0, 31) - new Date(2019, 1))/1000)
    const remainTime = {
      years: Math.trunc(remain/a),
      months: Math.trunc(remain%a/b),
      days: Math.trunc(remain%a%b/c),
      hours: Math.trunc(remain%a%b%c/d),
      minutes: Math.trunc(remain%a%b%c%d/e),
      seconds: Math.trunc(remain%a%b%c%d%e)
    }

    const format = (number) => {
      return `${number}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }
   
    return (
      <div className="sidebar">
        <div className="sidebar__button" onClick={this.handleButtonClick}>Remove selection</div>
        <div className="sidebar-selected">Selected days:</div>
        <div className='number'>{this.getTotal(start, end)}</div>
        <div className="slavery">Slavery started at {new Date(2019, 1).toLocaleDateString()}</div>
        <div className="sidebar-today">Today is <br/>{new Date().toLocaleDateString()}</div>
        <div className="passed">
          <div>Passed: </div>
          <ul>
            <li>{(passed*100/totalSeconds).toFixed(2)} %</li>
            <li>{format(passed)} seconds</li>
            <li>{format(Math.floor(passed/60))} minutes</li>
            <li>{format(Math.floor(passed/60/60))} hours</li>
            <li>{format(Math.floor(passed/60/60/24))} days</li>
            <li>{format(Math.floor(passed/60/60/24/30.5))} months</li>
          </ul>
        </div>
        <div className="remain">
          <div>
            {`Remain: ${remainTime.years} years, ${remainTime.months} months, ${remainTime.days} days, ${remainTime.hours} hours, ${remainTime.minutes} minutes, ${remainTime.seconds} seconds`}
          </div>
        </div>
      </div>
    )
  }
}
