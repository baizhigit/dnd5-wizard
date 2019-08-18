import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.scss';

export class App extends React.Component {
  async componentDidMount() {
    const { data } = await axios.get('/spells/1/');
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
