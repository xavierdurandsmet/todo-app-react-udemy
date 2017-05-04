import React from 'react';
import moment from 'moment';

const Todo = React.createClass({
    handleToggle() {
        const id = this.props.id;
        this.props.onToggle(id);
    },
    render() {
        const { text, id, completed, createdAt, completedAt } = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo';
        const renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
        }
        return (
            <div className={todoClassName} onClick={this.handleToggle} >
                <input type="checkbox" checked={completed} />
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
})

export default Todo;