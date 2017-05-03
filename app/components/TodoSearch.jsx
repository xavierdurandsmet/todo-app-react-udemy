import React from 'react';

const TodoSearch = React.createClass({
    handleSearchTodo() {
        const showCompleted = this.refs.showCompleted.checked;
        const todoSearch = this.refs.todoSearch.value;
        this.props.onTodoSearch(showCompleted, todoSearch)
    },
    render() {
        return (
            <div>
                <div>
                    <input type="search" placeholder="Search a todo" ref="todoSearch" onChange={this.handleSearchTodo} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
                        Show Completed Todos
                    </label>
                </div>
            </div>
        )
    }
})

export default TodoSearch;