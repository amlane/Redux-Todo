import { ADD_TODO } from './actions';

export const setToken = store => next => action => {
    if(action.type === ADD_TODO){
        console.log(action)
        localStorage.setItem('toDoArray', action.payload)
    }
    next(action);
}