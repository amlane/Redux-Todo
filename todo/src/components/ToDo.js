import React from 'react';

export default props => {
    return (
        <>
        <li>{props.todo} <button className="dlt-btn">x</button></li>
        </>
    )

}
