const initialState = [
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
        text: 'Build a React Redux App',
        isFinished: false
    }

]

const TodoReducer = (state=initialState, action) => {
    const nextId = state.length + 1;
    if(action.type === 'ADD_TODO') {
        const trimed_todo = action.payload.todoText.trim();
        if(trimed_todo.length > 0) {
            return [...state, {
                id: nextId,
                text: trimed_todo,
                isFinished: false
            }]} else{
                console.log('Todo text is empty');
                return state;
            }

    }else if(action.type === 'DELETE_TODO') {
        const newTodoList = state.filter((todo)=>todo.id !== action.payload.id);
        return newTodoList;

    }else if(action.type === 'EDIT_TODO') {
        const newTodoList = state.map((todo)=>{
            if(todo.id === action.payload.id){
                return {...todo, text: action.payload.text}
            }else {
                return todo;
            }
        })
        return newTodoList;

    }else if(action.type === 'FINISH_TODO') {
        const newTodoList = state.map((todo)=>{
            if(todo.id === action.payload.id){
                return {...todo, isFinished: !todo.isFinished}
            }else {
                return todo;
            }
        })
        return newTodoList;
    }
     return state;
}

export default TodoReducer;