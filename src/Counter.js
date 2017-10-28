import React from 'react'
import TodoApp from './TodoApp';
import withStore from './withStore'

export default withStore(
  ({ count }) => ({ count }),
  {
    log: state => console.log(JSON.stringify(state, null, 2)),
    decrement: ({ count }) => ({ count: count > 0 ? count - 1 : 0 }),
    increment: ({ count }) => ({ count: count + 1 })
  }
)(function Counter({
  log,
  count,
  decrement,
  increment
}){
  return (
    <div>
      <div>{ count }</div>
      <button onClick={ log }>Log</button>
      <button onClick={ decrement }>-</button>
      <button onClick={ increment }>+</button>
      <TodoApp />
    </div>
  )
})
