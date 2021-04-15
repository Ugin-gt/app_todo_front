import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  todos: [
    {
      id: 0,
      body: 'test todo',
      isDone: false,
    },
  ],
};

let serial = 1;

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TODO: {
      const { todos } = state;
      const { values: todo } = action;

      const newTodos = [...todos, { ...todo, id: serial++ }];

      return {
        ...state,
        todos: newTodos,
      };
    }
    case ACTION_TYPES.DELETE_TODO: {
      const { id } = action;
      const { todos } = state;

      return {
        ...state,
        todos: todos.filter(todo => todo.id !== id),
      };
    }
    case ACTION_TYPES.UPDATE_TODO: {
      const { id, values } = action;
      const { todos } = state;

      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(todo => todo.id === id);
      const todo = newTodos[todoIndex];

      newTodos[todoIndex] = { ...todo, ...values };

      return {
        ...state,
        tasks: newTodos,
      };
    }
    default: {
      return state;
    }
  }
}

export default todoReducer;
