/* TO-DO ACTIONS */

export const addTodo = (state, { currentTarget, keyCode }) => {
  if (keyCode === 13 && !!state.input) {
    return { input: '', todos: [...state.todos, currentTarget.value] }
  }
  return state
}

export const updateInput = (_, { currentTarget }) => ({ input: currentTarget.value })
