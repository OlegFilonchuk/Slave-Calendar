import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Mainscreen from '../Mainscreen'
import './App.css';

class App extends Component {

  state = {
    start: null,
    end: null,
    block: false
  }

  startSelect = (date) => {
    const { start, block } = this.state

    if (block) return

    if (start) {
      return this.endSelect(date)
    }

    if (!start) {
      this.setState({
        start: date
      })
    }

    return true
  }
  
  endSelect = (date) => {
    const { start } = this.state
    
    if (+date === +start) {
      this.closeSelection()
      return
    }
    this.setState({
      end: date,
      block: true
    })
    //TODO: add selected days higlighting

    return true
  }

  closeSelection = () => {
    this.setState({
      start: null,
      end: null,
      block: false
    })
    document.querySelectorAll('.selected').forEach((elem) => {
      elem.classList.remove('selected')
    })
    console.log('selection closed')
  }

  render() {
    const { start, end } = this.state

    return (
      <div className="container">
        <Sidebar selection={{start, end}} closeSelection={this.closeSelection}/>
        <Mainscreen startSelect={this.startSelect}/>
      </div> 
    );
  }
}

export default App;