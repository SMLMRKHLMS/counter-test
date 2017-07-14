import React from 'react'
import withStore from './withStore'

const decrement = ({ count }) => ({ count: count - 1 })
const increment = ({ count }) => ({ count: count + 1 })

const App = (props) => (
  <div>
    <div>{props.count}</div>
    <button onClick={props.decrement}>-</button>
    <button onClick={props.increment}>+</button>
  </div>
)

export default withStore({
  actions: updater => ({
    decrement: updater(decrement),
    increment: updater(increment)
  }),
  state: ({ count }) => ({ count })
})(App)
