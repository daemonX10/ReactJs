

import PropTypes from 'prop-types';
import ToDo from '../ToDo/ToDo';

const TodoList = ({todos}) => {

  return (
    <div className=' '>
      {todos?.map((todo) => <ToDo key={todo.id} text={todo.text} isFinished={todo.isFinished} /> )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array
};

export default TodoList;
