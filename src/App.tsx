import React from 'react';
import { Wizard } from './components/Wizard';

export const App: React.SFC<{}> = () => (
  <>
    <h1 className="app-header">{'D&D Wizard'}</h1>
    <main className="app-container">
      <article className="wizard">
        <Wizard />
      </article>
    </main>
  </>
);
