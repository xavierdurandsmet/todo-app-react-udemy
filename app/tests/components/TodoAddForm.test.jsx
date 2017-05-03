import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import TodoAddForm from 'TodoAddForm';

describe('TodoAddForm', () => {

    it('should exist', () => {
        expect(TodoAddForm).toExist();
    })

    describe('render', () => {
        it('should call onAddTodo if valid input entered', () => {
            const spy = expect.createSpy();
            const todoAddForm = TestUtils.renderIntoDocument(< TodoAddForm onAddTodo={spy} />)
            const $el = $(ReactDOM.findDOMNode(todoAddForm));
            todoAddForm.refs.newTodo.value = 'clean the dishes';
            TestUtils.Simulate.submit($el.find('form')[0]);
            expect(spy).toHaveBeenCalledWith('clean the dishes');
        })
        it('should call onAddTodo if valid input entered', () => {
            const spy = expect.createSpy();
            const todoAddForm = TestUtils.renderIntoDocument(< TodoAddForm onAddTodo={spy} />)
            const $el = $(ReactDOM.findDOMNode(todoAddForm));
            todoAddForm.refs.newTodo.value = '';
            TestUtils.Simulate.submit($el.find('form')[0]);
            expect(spy).toNotHaveBeenCalled();
        })
    })
})
