import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as UserActionCreators from '../actions/userCreators';

const UserList = props => {
  const { users, isFetching, error, getUsersRequest } = props;

  const loadMore = () => getUsersRequest({ offset: users.length });

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <section>
      <h1>User List</h1>
      {isFetching && 'LOADING...'}
      {error && JSON.stringify(error)}
      <ul>
        {users.map(user => (
          <li key={user.id}>{JSON.stringify(user, null, 8)}</li>
        ))}
      </ul>
      <button onClick={loadMore}>Load more Users!</button>
    </section>
  );
};

const mapStateToProps = ({ user }) => user;
const mapDispatchToProps = dispatch => ({
  getUsersRequest: ({ limit, offset } = {}) =>
    dispatch(UserActionCreators.getUserRequest({ offset, limit })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);