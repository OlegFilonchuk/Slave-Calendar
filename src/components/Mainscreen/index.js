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
      monthsArray.push(<Month key={i} year={this.state.year} month={i} startSelect={this.props.startSelect}/>) 
    }
    return monthsArray
  }

  componentDidMount() {
    this.mainScreenCont.style.height = '400px'
  }

  render() {


    return (
      <div className="mainscreen-container">
        <div className="mainscreen-header">
          <div className="button button-prev" onClick={this.handlePreviousButtonClick}><i className="fas fa-chevron-circle-left"></i></div>
          <h1>{this.state.year}</h1>
          <div className="button button-next" onClick={this.handleNextButtonClick}><i className="fas fa-chevron-circle-right"></i></div>
        </div>
        <div className="mainscreen-calendar" height='300px'  ref={(node) => {this.mainScreenCont = node}}>
          <ul className="mainscreen-list">
            {this.getBody()}
          </ul>
        </div>
      </div>
    )
  }
}
