import React, { Component } from 'react';
import Hero from './Hero/container/index'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className = 'app container-fluid'>
        <Hero />
      </div>
    );
  }
}

export default App;