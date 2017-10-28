export const add = ({ input, todos }) => input && ({
  input: '',
  todos: [...todos, { done: false, value: input }]
})

export const remove = ({ todos }, index) => ({
  todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
})

export const toggle = ({ todos }, index) => ({
  todos: todos.map((todo, i) => i === index
    ? { ...todo, done: !todo.done }
    : todo
  )
})

export const update = (_, { currentTarget }) => ({
  input: currentTarget.value
})
