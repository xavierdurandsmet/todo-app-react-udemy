import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {

    it('should exist', () => {
        expect(TodoSearch).toExist();
    })

    describe('render', () => {
        it('should call onTodoSearch if valid input entered', () => {
            const searchText = 'clean the dishes'
            const spy = expect.createSpy();
            const todoSearch = TestUtils.renderIntoDocument(< TodoSearch onTodoSearch={spy} />)
            todoSearch.refs.searchText.value = searchText;
            TestUtils.Simulate.change(todoSearch.refs.searchText);
            expect(spy).toHaveBeenCalledWith(false, searchText);
        })
        it('should call onTodoSearch if valid input entered', () => {
            const spy = expect.createSpy();
            const todoSearch = TestUtils.renderIntoDocument(< TodoSearch onTodoSearch={spy} />)
            todoSearch.refs.showCompleted.checked = true;
            TestUtils.Simulate.change(todoSearch.refs.showCompleted);
            expect(spy).toHaveBeenCalledWith(true, '');
        })
    })
})
