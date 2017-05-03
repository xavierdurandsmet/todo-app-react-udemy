import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    })
    it('should exist', () => {
        expect(TodoAPI).toExist();
    })
    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);
            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        })
        it('should not set invalid todos array', () => {
            let badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);
            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(localStorage.getItem('badTodos')).toBe(null);
        })
    })
})