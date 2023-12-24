

import PropTypes from 'prop-types';
import ToDo from '../ToDo/ToDo';
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';

const TodoList = () => {
  const { todos, setTodos} = useContext(TodoContext)

  const onDeleteTodo= (id)=>{
    const  newTodo = todos.filter((todo)=>todo.id!=id);
    setTodos(newTodo);
  }
//TODO: ON EDITING EVERY TIME EDITABLE TEXT RENDER SO I HAVE TO CHANGE IT ON SAVE BUTTON
  const onEditTodo = (id,editableText) =>{
    console.log(editableText?'true':'false')
    const newTodoList=todos.map((todo)=>{
      if(todo.id==id){
        todo.text=editableText;
      }
      return todo
    });
    setTodos(newTodoList);
  }

  const onFinishTodo=(id,state)=>{
    const newTodoList = todos.map((todo)=>{
      if(todo.id===id){
        todo.isFinished=state
      }
      return todo;
    });
    setTodos(newTodoList)
  }

  return (
    <div className=' '>
      {todos?.map((todo) => <ToDo 
      key={todo.id} 
      text={todo.text} 
      isFinished={todo.isFinished}
      deleteTodo={()=>{ onDeleteTodo(todo.id)}}
      editTodo = {(editableText)=>{ onEditTodo(todo.id,editableText)}}
      finishTodo={(state)=>{onFinishTodo(todo.id,state)}}
      /> )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func
};

export default TodoList;
