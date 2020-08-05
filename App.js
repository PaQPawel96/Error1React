import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home.js';
import Social from './social.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <Social />
      </header>
    </div>
  );
}

export default App;
