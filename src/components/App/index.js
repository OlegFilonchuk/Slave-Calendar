import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Mainscreen from '../Mainscreen'
import './App.css';

class App extends Component {

  state = {
    start: null,
    end: null
  }

  startSelect = (date) => {
    const { start } = this.state

    if (start) {
      this.endSelect(date)
      return
    }

    if (!start) {
      this.setState({
        start: date
      })
      console.log(`selection started; ${start}`);
    }
  }
  
  endSelect = (date) => {
    const { start, end } = this.state
    
    if (+date === +start) {
      this.closeSelection()
      return
    }
    this.setState({
      end: date
    })
    console.log(`selection ended; ${start}`);
  }

  closeSelection = () => {
    this.setState({
      start: null,
      end: null
    })
    document.querySelectorAll('.selected').forEach((elem) => {
      elem.classList.remove('selected')
    })
    console.log('selection closed')
  }

  render() {
    return (
      <div className="container">
        <Sidebar selection={this.state} closeSelection={this.closeSelection}/>
        <Mainscreen startSelect={this.startSelect}/>
      </div> 
    );
  }
}

export default App;