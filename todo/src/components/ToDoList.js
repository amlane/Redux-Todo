import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import ToDo from './ToDo';

class ToDoList extends React.Component {
    state = {
        newToDo: ''
    }

    render(){
        return (
            <div>
                {this.props.todos.map(todo => (
                    <ToDo todo={todo} />
                ))}
                <input placeholder="add a to do" />
                <button>Add</button>
            </div>
        )
    }
};


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, { addTodo })(ToDoList);


