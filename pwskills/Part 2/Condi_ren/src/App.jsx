import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addvalue = () => {
    setCount(count + 1)
  }
  const decrement =()=>{
    setCount(count-1)
  }
  const [todos,setTodos] = useState(['todo1','todo2','todo3'])

  if( count<5){
    return (
      <>
          <h1>Conditional Rendering</h1>
          <h2>Counter</h2>
          <p>Count: {count}</p>
          <button onClick={addvalue}>
            Increment
          </button>
        </>
    )
  }else{
    return(
      <>
        <h1>
          Todos List
        </h1>
        {todos.map((value)=><li>{value}</li>)}
        <p>
          Count: {count}
        </p>
        <button onClick={()=>setTodos([...todos,"todo 3"])}>
          Click
        </button>
        <button onClick={decrement}>
          decrement
        </button>
      </>
    )
  }
}

export default App
