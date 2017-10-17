/* TO-DO ACTIONS */

export const addTodo = (state, { keyCode, target }) => {
  if (keyCode === 13 && !!state.input) {
    return { input: '', todos: [...state.todos, target.value] }
  }
  return state
}

export const updateInput = (_, { currentTarget }) => ({ input: currentTarget.value })
