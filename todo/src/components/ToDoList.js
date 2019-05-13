import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import ToDo from './ToDo';

class ToDoList extends React.Component {
    state = {
        newToDo: ''
    }

    addToDo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newToDo);
        this.setState({ newToDo: "" })
    }

    handleInputChanges = e => this.setState({ newToDo: e.target.value })

    render(){
        return (
            <div>
                {this.props.todos.map(todo => (
                    <ToDo todo={todo} />
                ))}
                <form onSubmit={this.addToDo}>
                <input onChange={this.handleInputChanges} value={this.state.newToDo} placeholder="add a to do" />
                <button>Add</button>
                </form>
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


