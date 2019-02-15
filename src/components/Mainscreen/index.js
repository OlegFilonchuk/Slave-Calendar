import React, { Component } from 'react'
import Month from '../Month'
import './Mainscreen.css'

export default class Mainscreen extends Component {

  render() {
    const date = new Date()
    const currentYear = date.getFullYear()
    
    const monthsArray = [];
    for (let i = 0; i < 12; i++) {
      monthsArray.push(<Month key={i} year={currentYear} month={i}/>) 
    }

    return (
      <div className="mainscreen-container">
        <h1>{currentYear}</h1>
        <ul className="mainscreen">
          {monthsArray}
        </ul>
      </div>
    )
  }
}
