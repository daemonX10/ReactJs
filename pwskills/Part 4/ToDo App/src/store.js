import { createStore } from 'redux';
import { combineReducers } from 'redux';
import  TodoReducer  from './reducer/TodoReducer';

// const initialState = [
//     {
//         id: 1,
//         text: 'Learn React',
//         isFinished: false
//     },
//     {
//         id: 2,
//         text: 'Learn Redux',
//         isFinished: false
//     },
//     {
//         id: 3,
//         text: 'Build a React Redux App',
//         isFinished: false
//     }
// ]

const reducer = combineReducers({todos:TodoReducer})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)