import React from 'react';

const Todo = React.createClass({
    handleToggle() {
        const id = this.props.id;
        this.props.onToggle(id);
    },
    render() {
        const { text, id, completed } = this.props;
        return (
            <div onClick={this.handleToggle} >
                {text}
                <input type="checkbox" checked={completed} />
            </div>
        )
    }
})

export default Todo;