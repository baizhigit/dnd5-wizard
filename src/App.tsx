import React from 'react';
import axios from 'axios';

export class App extends React.Component {
  async componentDidMount() {
    const { data } = await axios.get('/spells/1/');
    console.log(data);
  }

  render() {
    return (
      <>
        <h1 className="app-header">{'D&D Wizard'}</h1>
        <main className="app-container">
          <article className="wizard">wizard works</article>
        </main>
      </>
    );
  }
}
