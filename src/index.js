import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import store from './store';

const App = store({ count: 0 })(Counter)

ReactDOM.render(<App hello="world" />, document.getElementById('root'))
