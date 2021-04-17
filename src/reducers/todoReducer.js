import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  todos: [],
  isFetching: false,
  error: null,
};

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TODO_SUCCESS: {
      const { todos } = state;
      const {
        payload: { todos: newTodos },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        todos: [...todos, ...newTodos],
      };
    }
    case ACTION_TYPES.GET_TODO_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.CREATE_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_TODO_SUCCESS: {
      const { todos } = state;
      const {
        payload: { todos: newTodos },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        todos: [...todos, ...newTodos],
      };
    }
    case ACTION_TYPES.CREATE_TODO_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.DELETE_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.DELETE_TODO_SUCCESS: {
      const { todos } = state;
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        isFetching: false,
        todos: todos.filter(todo => todo.id !== id),
      };
    }
    case ACTION_TYPES.DELETE_TODO_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    
    default: {
      return state;
    }
  }
}

export default todoReducer;
