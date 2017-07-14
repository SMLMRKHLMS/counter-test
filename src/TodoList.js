import React from 'react'
import withStore from './withStore'
import { addTodo, updateInput } from './actions'

const mappedActions = updater => ({
  addTodo: e => updater(addTodo(e)),
  updateInput: ({ target }) => updater(updateInput(target.value))
})

 const TodoList = ({
   addTodo,
   input,
   todos,
   updateInput
 }) => (
  <div>
    <input
      onChange={ updateInput }
      onKeyDown={ addTodo }
      type="text"
      value={ input }
    />
    { todos.map((todo, i) => <div key={ i }>{ todo }</div>) }
  </div>
)

export default withStore(state => state, mappedActions)(TodoList)
