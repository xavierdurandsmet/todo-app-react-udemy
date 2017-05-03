import React from 'react';
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({
    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
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
    handleTodoSearch (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.ToLowerCase()
        })
    },
    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoSearch onTodoSearch={this.handleTodoSearch}/>
                <TodoList todos={this.state.todos}/>
                <TodoAddForm onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
})

export default TodoApp;