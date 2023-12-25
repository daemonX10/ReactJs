import { useEffect, useReducer} from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

import TodoContext from './context/TodoContext'
import TodoReducer from './reducer/TodoReducer'

function App() {

 const prev_todos=[
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
    }];
 

  const [todos,dispatch] = useReducer(TodoReducer,prev_todos)
  
  useEffect(()=>{
    console.log(todos)
  },[todos])


  return(
    <>
    <TodoContext.Provider value={{todos,dispatch}}>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
    </>
  )
}

export default App
