import { ADD_TODO } from '../actions';

const initialState = {
    todo: ["eat", "pray", "love"]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
            default: 
                return state;
    }
}