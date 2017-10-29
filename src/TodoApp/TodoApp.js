import React from 'react'

function TodoApp({
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
}

export default TodoApp
