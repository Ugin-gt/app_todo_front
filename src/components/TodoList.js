import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodoRequest } from '../actions/todoCreators';

const TodoList = props => {
  const { todos, isFetching, error, getTodos } = props;

  const getMore = () => getTodos({ offset: todos.length });

  useEffect(() => {
    getMore();
  }, []);

  return (
    <section>
      <h1>ToDo LIST</h1>
      {isFetching && 'LOADING...'}
      {error && JSON.stringify(error)}
      <div>
        <ul>
          {todos.map(({ id, ...todo }) => (
            <li key={id}>{JSON.stringify(todo, null, 8)}</li>
          ))}
        </ul>
        <button onClick={getMore}>Get more Todos!</button>
      </div>
    </section>
  );
};

const mapStateToProps = ({ todo: { todos } }) => ({ todos });
const mapDispatchToProps = dispatch => ({
  getTodos: ({ page, limit } = {}) => dispatch(getTodoRequest({ page, limit })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
