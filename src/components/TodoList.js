import { connect } from 'react-redux';
import * as TodoCreators from '../actions/todoCreators';

const TodoList = props => {
  const { todos, updateAction, deleteAction } = props;

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
                  updateAction({
                    id,
                    values: {
                      isDone: checked,
                    },
                  })
                }
              />
            </div>
            <button onClick={() => deleteAction(id)}>Delete ToDo</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ todo: { todos } }) => ({ todos });
const mapDispatchToProps = dispatch => ({
  deleteAction: id => dispatch(TodoCreators.deleteTodo(id)),
  updateAction: ({ id, values }) =>
    dispatch(TodoCreators.updateTodo({ id, values })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
