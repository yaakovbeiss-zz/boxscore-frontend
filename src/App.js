import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Boxscore from './components/Boxscore'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Boxscore gameId={"1"}/>
          <Boxscore gameId={"2"}/>
      </div>
    );
  }
}

export default App;
