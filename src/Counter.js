import React from 'react'
import TodoApp from './TodoApp'
import withStore from './withStore'
import { decrement, increment } from './actions'

const mappedActions = updater => ({
  decrement: () => updater(decrement),
  increment: () => updater(increment)
})

const Counter = ({
  count,
  decrement,
  increment,
  hello
}) => (
  <div>
    <div>{ `App Name: Hello, ${ hello }!` }</div>
    <div>{ count }</div>
    <button onClick={ decrement }>-</button>
    <button onClick={ increment }>+</button>
    <TodoApp />
  </div>
)

export default withStore(state => state, mappedActions)(Counter)
