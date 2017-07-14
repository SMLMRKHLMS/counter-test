import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

const AppContainer = store({ state: { count: 0 } })(App)

ReactDOM.render(<AppContainer />, document.getElementById('root'))
