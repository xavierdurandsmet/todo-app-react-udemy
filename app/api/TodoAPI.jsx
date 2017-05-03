import $ from 'jquery';

module.exports = {
    setTodos: (todos) => {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos;
        }
    },
    getTodos: () => {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {}
        return $.isArray(todos)? todos : []
    },
    filterTodos (todos, showCompleted, searchText) {
        let filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return showCompleted || !todo.completed;
        })

        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            return todo.text.toLowerCase().indexOf(searchText) >= 0 || searchText.length === 0;
        })

        // sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) return -1;
            if (a.completed && !b.completed) return 1;
            else return 0;
        })


        return filteredTodos;
    }
}