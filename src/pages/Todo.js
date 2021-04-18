import React from 'react';
import TodoForm from '../components/todo/TodoForm';
import TodoCheckbox from '../components/todo/TodoCheckbox';
import TodoList from '../components/todo/TodoList';

const Todo = props => {
  return (
    <div>
      <TodoForm />
      <TodoCheckbox />
      <TodoList />
    </div>
  );
};

export default Todo;
