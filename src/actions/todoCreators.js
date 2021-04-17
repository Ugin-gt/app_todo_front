import ACTION_TYPES from './actionTypes';

export const createTodoRequest = ({ todo }) => ({
  type: ACTION_TYPES.CREATE_TODO_REQUEST,
  payload: { todo },
});

export const createTodoSuccess = ({ todo }) => ({
  type: ACTION_TYPES.CREATE_TODO_SUCCESS,
  payload: { todo },
});

export const createTodoError = ({ error }) => ({
  type: ACTION_TYPES.CREATE_TODO_ERROR,
  payload: { error },
});

export const getTodoRequest = ({ page, limit } = {}) => ({
  type: ACTION_TYPES.GET_TODO_REQUEST,
  payload: { page, limit },
});

export const getTodoSuccess = ({ todos } = {}) => ({
  type: ACTION_TYPES.GET_TODO_SUCCESS,
  payload: { todos },
});

export const getTodoError = ({ error }) => ({
  type: ACTION_TYPES.GET_TODO_ERROR,
  payload: { error },
});
