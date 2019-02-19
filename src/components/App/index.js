import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Mainscreen from '../Mainscreen'
import './App.css';

class App extends Component {

  state = {
    selection: {
      start: null,
      end: null
    }
  }

  startSelect = (date) => {
    if (this.state.selection.start) {
      if (+this.state.selection.start !== +date) {
        this.setState({
          selection: {end: date}
        })
        console.log(`selection ended: ${date}`);
      }  
    } else {
      this.setState({
        selection: {start: date}
      })
      console.log(`selection started: ${date}`);
    }
  }

  closeSelection = () => {
    this.setState({
      selection: {
        start: null,
        end: null
      }
    })
    document.querySelectorAll('.selected').forEach((elem) => {
      elem.classList.toggle('selected')
    })
  }

  render() {
    return (
      <div className="container">
        <Sidebar selection={this.state.selection} closeSelection={this.closeSelection}/>
        <Mainscreen startSelect={this.startSelect}/>
      </div> 
    );
  }
}

export default App;