import React from 'react'
import withStore from './withStore'

const App = ({
  count,
  decrement,
  increment,
}) => (
  <div>
    <div>{count}</div>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default withStore({
  actions: actions => ({ ...actions }),
  state: state => ({ ...state })
})(App)
