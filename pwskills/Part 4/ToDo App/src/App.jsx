import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

import { Provider } from 'react-redux'
import { store } from './store'

function App() {


  return(
    <Provider store={store}>
        <AddTodo />
        <TodoList />
    </Provider>
  )
}

export default App
