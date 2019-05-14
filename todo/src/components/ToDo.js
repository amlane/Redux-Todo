import React from 'react';

export default props => {
    console.log(props)
    return (
        <>
            <li 
            onClick={() => props.toggleComplete(props.todo.id)}>
            {props.todo.completed && <i className="far fa-check-square" />}
            {props.todo.value} 
            <button className="dlt-btn">x</button>
            </li>
        </>
    )

}
