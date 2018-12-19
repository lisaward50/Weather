import React, { Component } from 'react';
import Nav from '../Nav';
import Weather from '../Weather';
import './style.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="buffer"></div>
        <Weather/>
      </div>
    );
  }
}

export default App;

