import { useEffect, useState } from 'react';
import './App.css'

function App() {
  // let counter = 0;

  const [state_counter, setState_counter] = useState(0);
  useEffect(() => {
    console.log(`State Counter Value Using hook ${state_counter}`)
  }, [state_counter]);

  // const addvalue = () =>{
  //   counter++;
  //   console.log(`counter value is ${counter}`);
  // }

/* The commented code block is defining a function called `removeValue` that decrements the value of
the `counter` variable by 1 and logs the updated value to the console. However, this code is not
being used in the component and is commented out, so it does not have any effect on the
functionality of the application. */
  // const removeValue = ()=>{
  //   counter--;
  //   console.log(`counter value is ${counter}`);
  // }

  const AddValueState = () =>{
    if(state_counter<20){
      setState_counter(state_counter + 1);
    }else{
      console.log(`Cannot exceed Value of state_counter than 20`);
    }
  }
  

  const removeValueState =()=>{
    if(state_counter>0){
      setState_counter(state_counter - 1);
    }else{
      console.log(`value cannot be less than 0`);
    }
  }

  const resetValue = ()=>{
    setState_counter(0);
  }

  return (
    <div>
      {/* <h1>counter Value:{counter} </h1>

      <button onClick={addvalue}>
        Add Value {counter}
      </button>
      <br />
      <button onClick={removeValue}>
        Remove Value {counter}
      </button>

      <br />
      <br /> */}

      <h1>state_counter</h1>

      <h1>counter Value:{state_counter} </h1>

      <button onClick={AddValueState}>
        Add Value
      </button>

      <br />

      <button onClick={removeValueState}>
        Remove Value
      </button>

      <br />

      <button onClick={resetValue}>
        Reset
      </button>
    </div>
  )
}

export default App
