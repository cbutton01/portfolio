import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import TextArea from './components/TextArea';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TextArea text="This is a test for the text area"/>
      </div>
    );
  }
}

export default App;
