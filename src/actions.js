/* TO-DO ACTIONS */

export const addTodo = ({ keyCode, target }) => state => {
  if (keyCode === 13 && !!state.input) {
    return { input: '', todos: [...state.todos, target.value] }
  }
  return state
}

export const updateInput = input => () => ({ input })
