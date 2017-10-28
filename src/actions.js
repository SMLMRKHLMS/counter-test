/* TO-DO ACTIONS */

export const addTodo = ({ input, todos }) => ({ input: '', todos: [...todos, input] })
export const clearTodos = () => ({ input: '', todos: [] })
export const updateInput = (_, { currentTarget }) => ({ input: currentTarget.value })
