import { combineReducers } from 'redux';

import userReducer from './userReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

export default rootReducer;

const prev = {
  users: [],
  todos: [],
};

const now = {
  user: {
    users: [],
    error: null,
  },
  todo: {
    todos: [],
  },
};
