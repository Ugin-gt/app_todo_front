import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createUserSaga, getUsersSaga } from './userSagas';
import { createTodoSaga, getTodosSaga, deleteTodoSaga } from './todoSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(ACTION_TYPES.GET_USER_REQUEST, getUsersSaga);

  yield takeLatest(ACTION_TYPES.CREATE_TODO_REQUEST, createTodoSaga);
  yield takeLatest(ACTION_TYPES.GET_TODO_REQUEST, getTodosSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TODO_REQUEST, deleteTodoSaga);
}

export default rootSaga;
