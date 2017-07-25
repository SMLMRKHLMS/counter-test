import React from 'react'
import withStore from './withStore'

export default withStore(

  /* MAPPED STATE */
  ({ count }) => ({ count }),

  /* MAPPED ACTIONS */
  updater => ({
    decrement: () => updater(({ count }) => ({ count: count > 0 ? count - 1 : 0 })),
    increment: () => updater(({ count }) => ({ count: count + 1 }))
  })

  /* VIEW */
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
    </div>
  )
})
