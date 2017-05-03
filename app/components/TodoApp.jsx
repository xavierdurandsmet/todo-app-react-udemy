import React from 'react';
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';

const TodoApp = React.createClass({
    getInitialState() {
        return {
            todos: [
                {
                    id: 0,
                    text: 'walk the dog'
                },
                {
                    id: 1,
                    text: 'clean the yard'
                },
                {
                    id: 2,
                    text: 'clean the house'
                },
                {
                    id: 3,
                    text: 'clean the kitchen'
                }
            ]
        }
    },
    handleAddTodo (text) {
        const newId = this.state.todos[this.state.todos.length - 1].id + 1
        const newList = this.state.todos.concat({text: text, id: newId})
        this.setState({
            todos: newList
        })
    },
    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoList todos={this.state.todos}/>
                <TodoAddForm onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
})

export default TodoApp;