import React from 'react'

function TodoApp({
  add,
  clear,
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
      <button onClick={clear}>Clear</button>
      <ol>
        { todos.map(({ done, value }, i) => (
          <li key={`${ value }-${ i }`}>
            <input
              onClick={() => toggle(i)}
              type="checkbox"
            />
            <span className={`text${ done ? ' complete' : '' }`}>
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
