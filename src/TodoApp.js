import createStore from './createStore'
import TodoList from './TodoList'

const TodoApp = createStore({ input: '', todos: [] })(TodoList)

export default TodoApp
