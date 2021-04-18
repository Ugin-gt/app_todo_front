import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserRequest } from '../../actions/userCreators';

const UserList = props => {
  const { users, isFetching, error, getUsers } = props;

  const loadMore = () => getUsers({ offset: users.length });

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <section>
      <h1>User List</h1>
      {isFetching && 'LOADING...'}
      {error && JSON.stringify(error)}
      <ul>
        {users.map(({id, ...user}) => (
          <li key={id}>{JSON.stringify(user, null, 8)}</li>
        ))}
      </ul>
      <button onClick={loadMore}>Load more Users!</button>
    </section>
  );
};

const mapStateToProps = ({ user }) => user;
const mapDispatchToProps = dispatch => ({
  getUsers: ({ offset, limit } = {}) =>
    dispatch(getUserRequest({ offset, limit })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
