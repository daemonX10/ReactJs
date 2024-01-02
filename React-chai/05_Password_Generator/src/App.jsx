import { useCallback, useState , useRef, useEffect, useMemo } from 'react'
import './App.css'

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const NUMBER = "0123456789";
const SPECIAL_CHARS = "!@#$%^&*-_+=[]{}~`";

function App() {

  // state for length of password 
  const [length, setLength] = useState(8);

  // state for including numbers in password
  const [numberAllowed, setNumberAllowed ] = useState(false);

  // state for including special characters in password
  const [ charAllowed , setCharAllowed ] = useState(false);

  // state for storing generated password
  const [password,setPassword] = useState("");

  // ref hook for password input field
  const passwordRef = useRef(null);

  const str = useMemo(() => {
    let s = ALPHA;
    if (numberAllowed) s += NUMBER;
    if (charAllowed) s += SPECIAL_CHARS;
    return s;
  }, [numberAllowed, charAllowed]);


  // useCallback hook to create password
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    for(let i=1;i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  },[length,str])

  // usecall back hook to copy password to clipboard
  const copyPasswordToClipboard  = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect hook to generate password on component mount and when the length, numberAllowed, or charAllowed states change
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-rose-500' >

    <h1 className='text-white text-center my-3'>Password Generator</h1>

    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='Password' readOnly ref={passwordRef} />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>{ setLength(e.target.value )}} />
        <label>Length :{length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
        <label >Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked= {charAllowed} id='characterInput' onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }} />
        <label htmlFor="characterInput">Characters</label>
      </div>

    </div>
    </div>
  )
}

export default App
