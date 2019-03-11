import React, { Component } from 'react'
import Day from '../Day';
import './Month.css';

export default class Month extends Component {
  
  getTable = () => {
    const firstDay = new Date(this.props.year, this.props.month) // the first day of the month
    const lastDate = 32 - new Date(this.props.year, this.props.month, 32).getDate() // the number of the last day
    let daysCounter = 1 // counter of month days
    const n = firstDay.getDay() + lastDate // number of the last cell
    const daysArray = []
    const febrFirst = new Date(2019, 1)
    
    const renderDay = (x) => {
      let isToday = false
      const today = new Date()
      let value = null
      let isHidden = true
      let isFebrFirst = false

      if (x >= firstDay.getDay()) {
        value = daysCounter++
        isHidden = false
      }

      if (daysCounter > lastDate+1) {
        value = null
        daysCounter = 1
      }

      const date = new Date(this.props.year, this.props.month, daysCounter-1)

      if (new Date(today.getFullYear(), today.getMonth(), today.getDate()).valueOf() === +date) { // highlight today
        isToday = true
      }       

      if (+febrFirst === +date) {
        isFebrFirst = true
      }
      
      return (
        <Day
          date={date}
          value={value}
          key={x}
          isHidden={isHidden}
          isToday={isToday}
          isFebrFirst={isFebrFirst}
          startSelect={this.props.startSelect}
        />
      )
    }
    
    for (let i=0; i<n; i++) {
      daysArray.push(renderDay(i))
    }
    return daysArray
  }

  render() {
    const {month} = this.props
    const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (
      <li className="month-list">
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
