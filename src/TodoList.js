import React from 'react'
import withStore from './withStore'
import { addTodo, updateInput } from './actions'

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

export default withStore(state => state, { addTodo, updateInput })(TodoList)
