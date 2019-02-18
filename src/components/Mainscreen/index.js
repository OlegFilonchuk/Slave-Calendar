import React, { Component } from 'react'
import Month from '../Month'
import './Mainscreen.css'

export default class Mainscreen extends Component {

  state = {
    year: new Date().getFullYear()
  }

  handleNextButtonClick = (ev) => {
    ev.preventDefault()
    this.setState((prevState) => {
      return {year: prevState.year + 1}
    })
  }
  
  handlePreviousButtonClick = (ev) => {
    ev.preventDefault()
    this.setState((prevState) => {
      return {year: prevState.year - 1}
    })
  }

  getBody = () => {
    const monthsArray = [];
    for (let i = 0; i < 12; i++) {
      monthsArray.push(<Month key={i} year={this.state.year} month={i}/>) 
    }
    return monthsArray
  }

  render() {
    return (
      <div className="mainscreen-container">
        <div className="mainscreen-header">
          <h1>{this.state.year}</h1>
          <button onClick={this.handlePreviousButtonClick}>previous</button>
          <button onClick={this.handleNextButtonClick}>next</button>
        </div>
        <ul className="mainscreen">
          {this.getBody()}
        </ul>
      </div>
    )
  }
}
