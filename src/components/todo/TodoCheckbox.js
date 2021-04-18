import {
  updateTodoRequest,
  deleteTodoRequest,
} from '../../actions/todoCreators';

const TodoCheckbox = props => {
  const { body, deadline, isDone, id } = props;

  const isDoneHandler = ({ target: { checked } }) =>
    updateTodoRequest({ id, values: { isDone: checked } });

  const todoDelete = () => deleteTodoRequest(id);

  return (
    <article>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2> TodoID:{id} </h2>
        <div>ToDo:{body}</div>
        <div>Deadline:{deadline}</div>
        <p>
          Is Done: <input type='checkbox' checked={isDone} onChange={isDoneHandler} />
        </p>
      </div>
      <button onClick={todoDelete}>Delete ToDo</button>
    </article>
  );
};

export default TodoCheckbox;
