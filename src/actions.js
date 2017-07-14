/* TO-DO ACTIONS */

export const addTodo = ({ keyCode, target }) => state => {
  if (keyCode === 13 && !!state.input) {
    return { input: '', todos: [...state.todos, target.value] }
  }
  return state
}

export const updateInput = input => () => ({ input })

/* COUNTER ACTIONS */

export const decrement = ({ count }) => ({ count: count > 0 ? count - 1 : 0 })

export const increment = ({ count }) => ({ count: count + 1 })
