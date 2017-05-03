import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({
    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
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
        const { todos, searchText, showCompleted } = this.state;
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <TodoSearch onTodoSearch={this.handleTodoSearch} />
                <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                <TodoAddForm onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
})

export default TodoApp;