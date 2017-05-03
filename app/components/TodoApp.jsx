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
                    text: 'walk the dog',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'clean the yard',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'clean the house',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'clean the kitchen',
                    completed: false
                }
            ]
        }
    },
    handleAddTodo(text) {
        const newList = [...this.state.todos, { text: text, id: uuid(), completed: false }]
        this.setState({
            todos: newList
        })
    },
    handleTodoSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    handleToggle(id) {
        console.log(id);
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })
        this.setState({
            todos: updatedTodos
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
                <TodoSearch onTodoSearch={this.handleTodoSearch} />
                <TodoList todos={filteredTodos()} onToggle={this.handleToggle} />
                <TodoAddForm onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
})

export default TodoApp;