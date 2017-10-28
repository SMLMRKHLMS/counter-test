import * as reducers from './reducers'
import TodoApp from './TodoApp'
import withStore from './../withStore'
import './TodoApp.css';

export default withStore(state => state, reducers)(TodoApp)
