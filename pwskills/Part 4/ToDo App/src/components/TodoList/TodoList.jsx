

import PropTypes from 'prop-types';
import ToDo from '../ToDo/ToDo';

const TodoList = ({todos,setTodos}) => {

  const onDeleteTodo= (id)=>{
    const  newTodo = todos.filter((todo)=>todo.id!=id);
    setTodos(newTodo);
  }
//TODO: ON EDITING EVERY TIME EDITABLE TEXT RENDER SO I HAVE TO CHANGE IT ON SAVE BUTTON
  const onEditTodo = (id,editableText) =>{
    todos.map((todo)=>{
      if(todo.id==id){
        todo.text=editableText;
      }
    })
  }

  return (
    <div className=' '>
      {todos?.map((todo) => <ToDo 
      key={todo.id} 
      text={todo.text} 
      isFinished={todo.isFinished}
      deleteTodo={()=>{ onDeleteTodo(todo.id)}}
      editTodo = {()=>{ onEditTodo(todo.id,)}}
      /> )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func
};

export default TodoList;
