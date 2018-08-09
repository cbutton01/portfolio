import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TextArea from './components/TextArea';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TextArea text="Cameron Button" />
        <div className="tagLine">
            <TextArea text="Indie Game Dev"/>
            <TextArea text="Web Dev" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
