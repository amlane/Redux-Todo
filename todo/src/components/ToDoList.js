import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete, deleteToDo, clearCompleted } from '../actions';

import ToDo from './ToDo';

class ToDoList extends React.Component {
    state = {
        newToDo: ''
    }

    handleInputChanges = e => this.setState({ newToDo: e.target.value })

    addToDo = e => {
        e.preventDefault();
        if(!this.state.newToDo || this.props.todos.length > 10) return;

        this.props.addTodo(this.state.newToDo);
        this.setState({ newToDo: "" })
    }

    toggleComplete = id => {
        this.props.toggleComplete(id);
    }

    deleteToDo = (id) => {
        this.props.deleteToDo(id)
    }

    clearCompleted = id => {
        console.log("you clicked meh!")
        this.props.clearCompleted(id)
    }

    

    render(){
        return (
            <div className="form-container">
                <form onSubmit={this.addToDo}>
                    <input onChange={this.handleInputChanges} value={this.state.newToDo} placeholder="What do you need to do today?" />
                    <button className="add-btn">+</button>
                </form>
                <ul>{this.props.todos && this.props.todos.map(todo => (
                    <ToDo 
                    todo={todo} 
                    toggleComplete={this.toggleComplete} 
                    deleteToDo={this.deleteToDo}
                    />
                ))}</ul>
                <button onClick={this.clearCompleted} className="clr-btn">clear completed</button>
            </div>
        )
    }
};


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleComplete, deleteToDo, clearCompleted })(ToDoList);


