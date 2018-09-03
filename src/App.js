import React, { Component } from 'react';
import './App.css';
import {Tile} from './Tile/Tile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tile />
      </div>
    );
  }
}

export default App;
