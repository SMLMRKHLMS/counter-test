import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

const AppContainer = store({
  actions: {
    decrement: state => ({ count: state.count - 1 }), 
    increment: state => ({ count: state.count + 1 })
  },
  state: { count: 0 }
})(App)

ReactDOM.render(<AppContainer />, document.getElementById('root'));
