import PropTypes from 'prop-types';
import { useState } from 'react';

const ToDo = ({text,isFinished,deleteTodo,editTodo,finishTodo}) => {

  const buttonCss = "px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2";
  
  const inputButtonCss = 'm-2 px-3 py-2 bg-white border-2 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:blue-red-200 focus:ring-1 rounded-md sm:text-sm capitalize';


  const checkboxCss = "w-4 h-4 m-3 text-blue-600 bg-gray-100 border-gray-300 rounded-full dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:focus:rounded-full" 

  const [isEditing,setIsEditing] = useState(false);
  const [editableText,setEditableText] = useState(text);




  return (
    <div className='m-2'>
      <input type="checkbox" className={checkboxCss}
      checked={isFinished} onChange={finishTodo} />
      <span>{isEditing?<input value={editableText} onChange={(e)=>setEditableText(e.target.value)} className={inputButtonCss} /> :editableText }</span>


      <button type="button" 
      className={buttonCss} 
      onClick={()=>{editTodo(editableText), setIsEditing(!isEditing) }}>{isEditing? 'Save':'Edit'}
      </button>

      <button type="button" 
      className={buttonCss} 
      onClick={deleteTodo}>Delete
      </button>
        
    </div>
  )
}

ToDo.propTypes = {
  text: PropTypes.string,
  isFinished: PropTypes.bool,
  deleteTodo: PropTypes.func,
  editTodo:PropTypes.func
};

export default ToDo