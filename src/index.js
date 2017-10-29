import createStore from './createStore'
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'
import { getItem, setItem } from './localStorage'

const App = createStore(
  getItem('todos', { input: '', todos: [] }),
  [
    setItem({ key: 'todos', saveIf: type => type !== 'update' })
  ]
)(TodoApp)

ReactDOM.render(<App />, document.getElementById('root'))
