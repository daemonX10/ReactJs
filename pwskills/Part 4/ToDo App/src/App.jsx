import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {

  const [todos , setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      isFinished: false
    },
    {
      id: 2,
      text: 'Learn Redux',
      isFinished: false
    },
    {
      id: 3,
      text: 'Learn React Router',
      isFinished: true
    },
    {
      id: 4,
      text: 'Learn React Native',
      isFinished: false
    }
  ]);
  
  const addtoList = (todoText) => {
    setTodos([...todos, { id: todos.length + 1, text: todoText, isFinished: false }]);
  }


  return(
    <>
    <AddTodo addtoList={addtoList}/>
    <TodoList todos={todos}  />
    </>
  )
}

export default App
