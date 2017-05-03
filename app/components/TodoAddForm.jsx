import React from 'react';

const TodoAddForm = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const newTodoText = this.refs.newTodo.value;
        if (newTodoText.length > 0) {
            this.refs.newTodo.value = '';
            this.props.onAddTodo(newTodoText)
        } else {
            this.refs.newTodo.focus();
        }
    },
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add a Todo" ref="newTodo" />
                    <button className="button expanded">Add a Todo</button>
                </form>
            </div>
        )
    }
})

export default TodoAddForm;