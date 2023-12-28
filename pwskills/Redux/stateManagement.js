import { bindActionCreators, combineReducers, createStore } from "redux";

const TodoReducer = (state=[], action) => {
    const nextId = state.length + 1;
    if (action.type === 'ADD_TODO') {
        const trimed_todo = action.payload.todoText.trim();
        if (trimed_todo.length > 0) {
            return [...state, {
                id: nextId,
                text: trimed_todo,
                isFinished: false
            }]
        } else {
            console.log('Todo text is empty');
            return state;
        }

    } else if (action.type === 'DELETE_TODO') {
        const newTodoList = state.filter((todo) => todo.id !== action.payload.id);
        return newTodoList;

    } else if (action.type === 'EDIT_TODO') {
        const newTodoList = state.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, text: action.payload.text }
            } else {
                return todo;
            }
        })
        return newTodoList;

    } else if (action.type === 'FINISH_TODO') {
        const newTodoList = state.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, isFinished: !todo.isFinished }
            } else {
                return todo;
            }
        })
        return newTodoList;
    }
    return state;
}

const userReducer = (state= [],action)=>{
    if(action.type==='LOGIN'){
        return {...state,login:true}
    }else if(action.type==='LOGOUT'){
        return {...state,login:false}
    }else if(action.type==='REGISTER'){
        return {...state,register:true}
    }else if(action.type==='UNREGISTER'){
        return {...state,register:false}
    }else if(action.type==='CHANGE_NAME'){
        return {...state,name:action.payload.name}
    }else if(action.type==='CHANGE_PASSWORD'){
        return {...state,password:action.payload.password}
    }
    else if(action.type==='CHANGE_EMAIL'){
        return {...state,email:action.payload.email}
    }else if(action.type==='add_user'){
        return [...state,{id:action.payload.id,name:action.payload.name,email:action.payload.email,password:action.payload.password}]
    }
    return state;
}

const addTodo=(todoText)=>{
    return {type:'ADD_TODO',payload:{todoText:todoText}}
}

const deleteTodo = (id)=>{
    return{type:'DELETE_TODO',payload:{id:id}}
}
const add_user = (user)=>{
    return {type:'add_user',payload:{id:user.id,name:user.name,email:user.email,password:user.password}}
}

const preloadedState = {
    users:[
        {
            id:1,
            name:'test',
            email:'nothing@dg.com',
            password:'1234'
        }
    ],
    todos:[
        {
            id:1,
            text:'test',
            isFinished:false
        }
    ]
}


const reducers = combineReducers({users:userReducer,todos:TodoReducer});

const store = createStore(reducers,preloadedState);

store.subscribe(()=>console.log(store.getState()));



// BIND ACTION CREATORS 

const actions = bindActionCreators({addTodo,deleteTodo,add_user},store.dispatch);


// combine reducers == multiple reducers


store.dispatch({type:'LOGIN',payload:{}});


actions.add_user([{
    id:2,
    name:'test',
    email:'af@gmail.com',
    password:'1234'
}]);
