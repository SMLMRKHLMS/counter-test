import React from 'react'
import TodoApp from './TodoApp';
import withStore from './withStore'

export default withStore(
  ({ count }) => ({ count }),
  {
    decrement: ({ count }) => ({ count: count > 0 ? count - 1 : 0 }),
    increment: ({ count }) => ({ count: count + 1 })
  }
)(function Counter({
  count,
  decrement,
  increment
}){
  return (
    <div>
      <div>{ count }</div>
      <button onClick={ decrement }>-</button>
      <button onClick={ increment }>+</button>
      <TodoApp />
    </div>
  )
})
