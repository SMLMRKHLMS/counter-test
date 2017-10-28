import logger from './logger'
import createStore from './createStore'
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'

const App = createStore(
  { input: '', todos: [] },
  [ logger({ collapsed: true }) ]
)(TodoApp)

ReactDOM.render(<App />, document.getElementById('root'))
