import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Mainscreen from '../Mainscreen'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Mainscreen />
      </div> 
    );
  }
}

export default App;