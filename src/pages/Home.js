import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Home = props => {
  return (
    <div>
      <UserForm />
      <TodoForm />
      <UserList />
      <TodoList />
    </div>
  );
};

export default Home;
