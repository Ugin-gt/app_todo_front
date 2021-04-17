const ACTION_TYPES = {
   // TODO ACTIONS
  CREATE_TODO_REQUEST: 'todo/createRequest',
  CREATE_TODO_SUCCESS: 'todo/createSuccess',
  CREATE_TODO_ERROR: 'todo/createError',
   
  GET_TODO_REQUEST: 'todo/getRequest',
  GET_TODO_SUCCESS: 'todo/getSuccess',
  GET_TODO_ERROR: 'todo/getError',

  UPDATE_TODO_REQUEST: 'todo/updateRequest',
  UPDATE_TODO_SUCCESS: 'todo/updateSuccess',
  UPDATE_TODO_ERROR: 'todo/updateError',
  
  DELETE_TODO_REQUEST: 'todo/deleteRequest',
  DELETE_TODO_SUCCESS: 'todo/deleteSuccess',
  DELETE_TODO_ERROR: 'todo/deleteError',

  CLEAR_TODO_ERROR:'todo/clearError',

  // USEER ACTIONS
  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',

  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',
};

export default ACTION_TYPES;