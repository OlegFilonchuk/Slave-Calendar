import React, { Component } from 'react'
import Day from '../Day';
import './Month.css';

export default class Month extends Component {
  
  firstDay = new Date(this.props.year, this.props.month) // the first day of the month
  lastDate = 32 - new Date(this.props.year, this.props.month, 32).getDate() // the last day
  counter = 1
  n = this.firstDay.getDay() + this.lastDate // number of the last cell

  renderDay = (x) => {
    let value = null
    let isHidden = true
    if (x >= this.firstDay.getDay()) {
      value = this.counter++
      isHidden = false
    }
    if (this.counter > this.lastDate+1) {
      value = null
    }
    return <Day value={value} key={x} isHidden={isHidden}/>
  }
    
  getTable = () => {
    const daysArray = []
    for (let i=0; i<this.n; i++) {
      daysArray.push(this.renderDay(i))
    }
    return daysArray
  }

  render() {

    const {month} = this.props
    const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (
      <li className="month">
        <h3>{names[month]}</h3>
        <div className="month-row month-header">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>
        <div className="month-row">
          {this.getTable()}
        </div>
      </li>
    )
  }
}
