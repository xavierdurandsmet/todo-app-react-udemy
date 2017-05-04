import React from 'react';

const TodoSearch = React.createClass({
    handleSearchTodo() {
        const showCompleted = this.refs.showCompleted.checked;
        const searchText = this.refs.searchText.value;
        this.props.onTodoSearch(showCompleted, searchText)
    },
    render() {
        return (
            <div className="container__header">
                <div>
                    <input type="search" placeholder="Search a todo" ref="searchText" onChange={this.handleSearchTodo} />
                </div>
                <div>
                    <label id="container__label">
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearchTodo} />
                        Show Completed Todos
                    </label>
                </div>
            </div>
        )
    }
})

export default TodoSearch;