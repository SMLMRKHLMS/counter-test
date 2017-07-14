import store from './store'
import TodoList from './TodoList'

const TodoApp = store({ input: '', todos: [] })(TodoList)

export default TodoApp
