import createStore from './createStore'
import logger from './logger';
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'
import { getItem, setItem } from './localStorage'

const App = createStore(
  getItem('todos', { input: '', todos: [] }),
  [
    logger(true, action => action !== 'update'),
    setItem('todos', action => action !== 'update')
  ]
)(TodoApp)

ReactDOM.render(<App />, document.getElementById('root'))
