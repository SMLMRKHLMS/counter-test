import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import logger from './logger';
import store from './store';

const App = store(
  { count: 0 },
  [ logger({ collapsed: true }) ]
)(Counter)

ReactDOM.render(<App hello="world" />, document.getElementById('root'))
