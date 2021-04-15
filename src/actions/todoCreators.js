import ACTION_TYPES from './actionTypes';

export const createTodo = values => ({
  type: ACTION_TYPES.CREATE_TODO,
  values,
});

export const updateTodo = ({ id, values }) => ({
  type: ACTION_TYPES.UPDATE_TODO,
  id,
  values,
});

export const deleteTodo = id => ({
  type: ACTION_TYPES.DELETE_TODO,
  id,
});
