import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    })
    it('should add todos to the todo state on handleAddTodo', () => {
        const todoText = 'clean a dish';
        const todoApp = TestUtils.renderIntoDocument(< TodoApp/>)
        
        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe('clean a dish');

    })
    it('should toggle completed value when handleToggle called', () => {
        const todoData = {
            id: 11,
            text: 'test features',
            completed: false
        };
        const todoApp = TestUtils.renderIntoDocument(< TodoApp/>)
        
        todoApp.setState({todos: [todoData]});

        // check that todo's item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle with 11
        todoApp.handleToggle(11);
        // verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);

    })
})