import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

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
            } )
        }
        
              default: 
                return state;
    }
}