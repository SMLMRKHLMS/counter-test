import React from 'react';
import withStore from './../withStore'
import './TodoApp.css';

export default withStore(state => state, {

  add: ({ input, todos }) => input && ({
    input: '',
    todos: [...todos, { done: false, value: input }]
  }),

  remove: ({ todos }, index) => ({
    todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
  }),

  toggle: ({ todos }, index) => ({
    todos: todos.map((todo, i) => i === index
      ? { ...todo, done: !todo.done }
      : todo
    )
  }),

  update: (_, { currentTarget }) => ({
    input: currentTarget.value
  })

})(function TodoApp({
  add,
  input,
  remove,
  todos,
  toggle,
  update
}) {
  return (
    <div>
      <input
        onChange={update}
        type="text"
        value={input}
      />
      <button onClick={add}>Add</button>
      <ol>
        { todos.map(({ done, value }, i) => (
          <li key={`${value}-${i}`}>
            <input
              checked={done}
              onChange={() => toggle(i)}
              type="checkbox"
            />
            <span className={`text${done ? ' complete' : ''}`}>
              {value}
            </span>
            <a
              className="remove"
              onClick={() => remove(i)}
            >
              remove
            </a>
          </li>
        )) }
      </ol>
    </div>
  )
})
