import React from 'react';

export default props => {
    console.log(props.todo)
    return (
        <>
        <li>{props.todo.value} <button className="dlt-btn">x</button></li>
        </>
    )

}
