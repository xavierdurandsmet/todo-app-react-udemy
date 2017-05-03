import React from 'react';

const Todo = React.createClass({
    render () {
        const { text, id } = this.props;
        return (
            <div>
                {text}
            </div>
        )
    }
})

export default Todo;