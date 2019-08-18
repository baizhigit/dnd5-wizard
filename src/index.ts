import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('root')
);
serviceWorker.unregister();
