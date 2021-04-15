import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

function userReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_USER_SUCCESS: {
      const { users } = state;
      const {
        payload: { users: newUsers },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        users: [...users, ...newUsers],
      };
    }
    case ACTION_TYPES.GET_USER_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.CREATE_USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const { values: user } = action;
      const { users } = state;
      return {
        ...state,
        isFetching: false,
        error: null,
        users: [...users, user],
      };
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default userReducer;
