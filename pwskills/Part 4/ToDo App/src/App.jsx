import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

import TodoContext from './context/TodoContext'

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
  
  useEffect(()=>{
    console.log(todos)
  },[todos])


  return(
    <>
    <TodoContext.Provider value={{todos,setTodos}}>
      <AddTodo />
      <TodoList setTodos={setTodos} todos={todos}/>
    </TodoContext.Provider>
    </>
  )
}

export default App
