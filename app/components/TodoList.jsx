import React from 'react';
import Todo from 'Todo';

const TodoList = React.createClass({
    render() {
        const { todos } = this.props;
        const renderTodos = () => {
            return todos.map((todo) => {
                return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
            })
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
})

export default TodoList;