import React from 'react';
import TodoList from 'TodoList';

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
    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
})

export default TodoApp;