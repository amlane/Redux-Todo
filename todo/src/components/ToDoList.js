import React from 'react';

class ToDoList extends React.Component {
    state = {
        newToDo: ''
    }

    render(){
        return (
            <div>
                <h2>Here's a placeholder for my mapped todos</h2>
                <input placeholder="add a to do" />
                <button>Add</button>
            </div>
        )
    }
};

export default ToDoList;


