import React from 'react';

export default props => {
    console.log(props)
    return (
        <>
            <li 
            onClick={() => props.toggleComplete(props.todo.id)}
            className={props.todo.completed ? 'completed' : '' }
            >
            {props.todo.value} 
            <button onClick={() => props.deleteToDo(props.todo.id)} className="dlt-btn">x</button>
            </li>
        </>
    )

}
