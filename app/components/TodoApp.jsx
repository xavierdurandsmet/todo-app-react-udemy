import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

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
        const newList = [...this.state.todos, {
            text: text,
            id: uuid(),
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
        }]
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
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
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
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onTodoSearch={this.handleTodoSearch} />
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                            <TodoAddForm onAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default TodoApp;


