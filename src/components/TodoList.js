import { connect } from 'react-redux';
import * as TodoCreators from '../actions/todoCreators';

const TodoList = props => {
  const { todos,isFetching, error, getTodoAction, updateTodoAction, deleteTodoAction } = props;

  return (
    <section>
      <h1>ToDo LIST</h1>
      <ul>
        {todos.map(({ id, ...todo }) => (
          <li key={id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1> TodoListID: {id}</h1>
              <div>{todo.body}</div>
              <input
                type='checkbox'
                checked={todo.isDone}
                onChange={({ target: { checked } }) =>
                updateTodoAction({
                    id,
                    values: {
                      isDone: checked,
                    },
                  })
                }
              />
            </div>
            <button onClick={() => deleteTodoAction(id)}>Delete ToDo</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ todo: { todos } }) => ({ todos });
const mapDispatchToProps = dispatch => ({
  getTodoAction: () => dispatch(TodoCreators.getTodoRequest()),
  deleteTodoAction: id => dispatch(TodoCreators.deleteTodo(id)),
  updateTodoAction: ({ id, values }) =>
    dispatch(TodoCreators.updateTodo({ id, values })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
