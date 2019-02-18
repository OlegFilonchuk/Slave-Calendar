import React, { Component } from 'react'
import Day from '../Day';
import './Month.css';

export default class Month extends Component {
  
  getTable = () => {
    const renderDay = (x) => {
      let value = null
      let isHidden = true
      if (x >= firstDay.getDay()) {
        value = counter++
        isHidden = false
      }
      if (counter > lastDate+1) {
        value = null
      }
      const date = new Date(this.props.year, this.props.month, counter-1)
      return <Day date={date} value={value} key={x} isHidden={isHidden}/>
    }
    
    const firstDay = new Date(this.props.year, this.props.month) // the first day of the month
    const lastDate = 32 - new Date(this.props.year, this.props.month, 32).getDate() // the last day
    let counter = 1
    const n = firstDay.getDay() + lastDate // number of the last cell
    const daysArray = []
    for (let i=0; i<n; i++) {
      daysArray.push(renderDay(i))
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
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>
        <div className="month-row">
          {this.getTable()}
        </div>
      </li>
    )
  }
}
