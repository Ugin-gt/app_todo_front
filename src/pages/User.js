import React from 'react';
import UserForm  from '../components/user/UserForm';
import UserList  from '../components/user/UserList';

const User = props => {
  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
};

export default User;
