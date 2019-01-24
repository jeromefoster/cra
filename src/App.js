import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings';

const App = () => (
  <div className="App">
    <header className="App-header">
        <h1>Hello React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting firstName="Xx" lastName="yY"/>
      </header>
  </div>
);

export default App;

