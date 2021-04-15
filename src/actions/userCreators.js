import ACTION_TYPES from './actionTypes';

export const createUserRequest = values => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
  values,
});

export const createUserSuccess = values => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  values,
});

export const createUserError = error => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  error,
});

export const getUserRequest = ({ offset, limit }) => ({
  type: ACTION_TYPES.GET_USER_REQUEST,
  payload: { offset, limit },
});

export const getUserSuccess = ({ users }) => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  payload: { users },
});

export const getUserError = ({ error }) => ({
  type: ACTION_TYPES.GET_USER_ERROR,
  payload: { error },
});