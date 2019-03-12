import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Mainscreen from '../Mainscreen'
import './App.css';

class App extends Component {

  state = {
    start: null,
    end: null,
    // block: false
  }

  startSelect = (date) => {
    const { start } = this.state

    // if (block) return

    if (!start) {
      this.setState({
        start: date
      })
    }

    if (start) {
      return this.endSelect(date)
    }

    console.log('started!')
    return true
  }
  
  endSelect = (date) => {
    const { start, end } = this.state
    
    if (+date === +start) {
      this.closeSelection()
      return
    }

    if (+date === +end) {
      this.setState({
        end:null
      })
      let elems = document.querySelectorAll('.selected')
      elems[elems.length - 1].classList.remove('selected')
      console.log('end switched!')

      return
    }

    this.setState({
      end: date,
      // block: true
    })
    //TODO: add selected days higlighting

    console.log('ended!')
    return true
  }

  closeSelection = () => {
    this.setState({
      start: null,
      end: null,
      // block: false
    })
    document.querySelectorAll('.selected').forEach((elem) => {
      elem.classList.remove('selected')
    })
    console.log('closed!')
  }

  render() {
    const { start, end } = this.state

    return (
      <div className="container">
        <Sidebar selection={{start, end}} closeSelection={this.closeSelection}/>
        <Mainscreen startSelect={this.startSelect} start={start} end={end}/>
      </div> 
    );
  }
}

export default App;