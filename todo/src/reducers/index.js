import { ADD_TODO } from '../actions';

const initialState = {
    todos: ["eat", "pray", "love"]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todo, action.payload]
            }
            default: 
                return state;
    }
}