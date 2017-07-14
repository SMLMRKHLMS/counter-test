import React from 'react'
import withStore from './withStore'

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

const addTodo = ({ keyCode, target }) => state => {
  if (keyCode === 13 && !!state.input) {
    return { input: '', todos: [...state.todos, target.value] }
  }
  return state  
}

const updateInput = input => () => ({ input })

const mappedActions = updater => ({
  addTodo: e => updater(addTodo(e)),
  updateInput: ({ target }) => updater(updateInput(target.value))
})

export default withStore(state => state, mappedActions)(TodoList)
