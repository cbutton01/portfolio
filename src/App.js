import React, { Component } from 'react';
import TextArea from './components/TextArea';
import './styles/App.css';
import { picture } from './media/me.jpg';

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
        <img src={picture} alt="test" />
        <p>
          Projects
        </p>
        <p>
          Experience
        </p>
      </div>
    );
  }
}

export default App;
