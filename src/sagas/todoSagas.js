import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TodoActionCreators from '../actions/todoCreators';

export function * createTodoSaga (action) {
  try {
    const { payload } = action;
    const {
      data: { data: todo },
    } = yield API.createTodo({ ...payload.todo }); //data -> data

    yield put(TodoActionCreators.createTodoSuccess(todo));
  } catch (error) {
    yield put(TodoActionCreators.createTodoError(error));
  }
}
export function * getTodosSaga (action) {
  try {
    const {
      data: { data: todos },
    } = yield API.getTodos(action.payload);

    yield put(TodoActionCreators.getTodoSuccess({ todos }));
  } catch (error) {
    yield put(TodoActionCreators.getTodoError({ error }));
  }
}

export function * deleteTodoSaga (action) {
  try {
    const {
      payload: { id },
    } = action;

    const {
      data: { data: todoId },
    } = yield API.deleteTodo({ todoId: id });

    yield put(TodoActionCreators.deleteTodoSuccess(todoId));
  } catch (error) {
    yield put(TodoActionCreators.deleteTodoError(error));
  }
}