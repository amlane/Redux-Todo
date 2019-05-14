import React from 'react';

export default props => {
    console.log(props.todo.completed)
    return (
        <>
        <li key={props.todo.id} onClick={() => props.toggleComplete(props.todo.id)}>{props.todo.value} <button className="dlt-btn">x</button></li>
        </>
    )

}
