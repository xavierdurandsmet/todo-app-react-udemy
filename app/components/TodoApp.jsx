import React from 'react';
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

const TodoApp = React.createClass({
    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog'
                },
                {
                    id: uuid(),
                    text: 'clean the yard'
                },
                {
                    id: uuid(),
                    text: 'clean the house'
                },
                {
                    id: uuid(),
                    text: 'clean the kitchen'
                }
            ]
        }
    },
    handleAddTodo (text) {
        const newList = [...this.state.todos, {text: text, id: uuid()}]
        this.setState({
            todos: newList
        })
    },
    handleTodoSearch (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render() {
        const { todos, searchText } = this.state;
        const filteredTodos = () => {
            return todos.filter((todo) => {
                return todo.text.indexOf(searchText) >= 0; 
            })
        }
        return (
            <div>
                <TodoSearch onTodoSearch={this.handleTodoSearch}/>
                <TodoList todos={filteredTodos()}/>
                <TodoAddForm onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
})

export default TodoApp;