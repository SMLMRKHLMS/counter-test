import logger from './logger'
import createStore from './createStore'
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'
import { retrieveFromLocalStorage, saveToLocalStorage } from './localStorage'

const App = createStore(
  retrieveFromLocalStorage('todos', { input: '', todos: [] }),
  [
    logger({ collapsed: true, logIf: type => type !== 'update' }),
    saveToLocalStorage({ key: 'todos', saveIf: type => type !== 'update' })
  ]
)(TodoApp)

ReactDOM.render(<App />, document.getElementById('root'))
