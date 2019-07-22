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

export const DELETE_TODO = 'DELETE_TODO';
export const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const clearCompleted = id => {
    return {
        type: CLEAR_COMPLETED,
        payload: id
    }
}