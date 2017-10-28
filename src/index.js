import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import logger from './logger';
import createStore from './createStore';

const App = createStore(
  { count: 0 },
  [ logger({ collapsed: true }) ]
)(Counter)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
