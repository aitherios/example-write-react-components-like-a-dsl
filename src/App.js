import React, { Component } from 'react';
import Header from './Header'
import { Wrapper, Logo, Headline } from './Header/blocks'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Using Header set */}
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Using Header blocks to extend behaviour*/}
        <Wrapper>
          <Logo/>
          <Headline/>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Wrapper>
      </div>
    );
  }
}

export default App;
