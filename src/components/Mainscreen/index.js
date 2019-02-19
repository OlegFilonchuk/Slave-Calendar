import React, { Component } from 'react'
import Month from '../Month'
import './Mainscreen.css'

export default class Mainscreen extends Component {

  state = {
    year: new Date().getFullYear(),
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
      monthsArray.push(<Month key={i} year={this.state.year} month={i} startSelect={this.props.startSelect}/>) 
    }
    return monthsArray
  }

  render() {
    return (
      <div className="mainscreen-container">
        <div className="mainscreen-header">
          <div className="button button-prev" onClick={this.handlePreviousButtonClick}>{'<'}</div>
          <h1>{this.state.year}</h1>
          <div className="button button-next" onClick={this.handleNextButtonClick}>{'>'}</div>
        </div>
        <ul className="mainscreen-list">
          {this.getBody()}
        </ul>
      </div>
    )
  }
}
