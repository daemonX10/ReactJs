

import PropTypes from 'prop-types';
import ToDo from '../ToDo/ToDo';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos);

  const onDeleteTodo= (id)=>{
    dispatch({type:'DELETE_TODO',payload:{id}})
  }


  const onEditTodo = (id,editableText) =>{
    dispatch({type:'EDIT_TODO',payload:{id:id,text:editableText}})
  }

  const onFinishTodo=(id)=>{
    dispatch({type:'FINISH_TODO',payload:{id,}})
  }

  return (
    <div className=' '>
      {todos?.map((todo) => <ToDo 
      key={todo.id} 
      text={todo.text} 
      isFinished={todo.isFinished}
      deleteTodo={()=>{ onDeleteTodo(todo.id)}}
      editTodo = {(editableText)=>{ onEditTodo(todo.id,editableText)}}
      finishTodo={()=>{onFinishTodo(todo.id)}}
      /> )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func
};

export default TodoList;
