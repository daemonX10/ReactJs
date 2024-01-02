import './App.css'
import { useState } from 'react'

function App() {
  const [color,setColor] = useState("blue");
  return (
    <div className='w-full h-screen duration-400 ' 
      style={{background:color}} >
      
      <div className='fixed flex flex-wrap justify-center align-baseline bottom-12 index-x-0 px-2'>
        <div className='flex flex-wrap justify-center align-middle gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >
          <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background:"red"}} >
            RED
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >Black</button>
        </div>
      </div>

    </div>
  )
}

export default App
