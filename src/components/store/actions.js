import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types';

let TodoId = 2;

const addTodo = text => ({
    type: ADD_TODO,
    id: TodoId++,
    text
});

const deleteTodo = id => ({
    type: REMOVE_TODO,
    id: id
});

const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id: id
})

const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export {
	addTodo,
	deleteTodo,
	toggleTodo,
	setVisibilityFilter
};