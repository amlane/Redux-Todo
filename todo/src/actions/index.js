export const ADD_TODO = "ADD_TODO";

export const addTodo = todo => {
    return {
        type: ADD_TODO, 
        payload: todo
    }
}

export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const toggleComplete = id => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    }
}