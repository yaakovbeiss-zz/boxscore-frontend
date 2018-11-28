import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Boxscore from './components/Boxscore'

class App extends Component {
    state = {
        gameId: "1",
    }

    render() {
        return (
            <div className="App">
                <div className="boxscores-container">
                    <button onClick={() => this.setState({gameId: "1"})}>Game 1</button>
                    <button onClick={() => this.setState({gameId: "2"})}>Game 2</button>
                </div>
                <Boxscore gameId={this.state.gameId}/>
            </div>
        );
    }
}

export default App;
