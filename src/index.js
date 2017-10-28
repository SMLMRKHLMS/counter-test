import logger from './logger'
import createStore from './createStore'
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'
import { retrieveFromLocalStorage, saveToLocalStorage } from './saveToLocalStorage'

const App = createStore(
  retrieveFromLocalStorage('todos', { input: '', todos: [] }),
  [
    logger({ collapsed: true }),
    saveToLocalStorage('todos', (_, reducer) => reducer !== 'update')
  ]
)(TodoApp)

ReactDOM.render(<App />, document.getElementById('root'))
