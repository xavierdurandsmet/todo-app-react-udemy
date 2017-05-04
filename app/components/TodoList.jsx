import React from 'react';
import Todo from 'Todo';

const TodoList = React.createClass({
    render() {
        const { todos } = this.props;
        const renderTodos = () => {
            if (todos.length === 0 ) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }
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