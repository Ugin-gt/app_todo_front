import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TodoActionCreators from '../actions/todoCreators';

export function * createTodoSaga (action) {
  try {
    const {
      data: {
        data: [todo],
      },
    } = yield API.createTodo(action.values); //data -> data

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
