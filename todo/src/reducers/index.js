import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO, CLEAR_COMPLETED } from '../actions';

const initialState = {
    todos: [
       { value: 'make to do list', id: '1', completed: false }
    ],

}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos, 
                    { value: action.payload, id: Date.now(), completed: false } 
                ]
            }

        case TOGGLE_COMPLETE:
        return {
            ...state,
            todos: state.todos.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            } )
        }

        case DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter( todo => {
               return todo.id !== action.payload
            })
        }

        case CLEAR_COMPLETED: 
        return {
            ...state,
            todos: state.todos.filter( todo => {
                return !todo.completed
            })
        }
        
              default: 
                return state;
    }
}