import React from 'react';
import { updateTodoRequest, deleteTodoRequest } from '../actions/todoCreators';

const Todo = props => {
  const { body, deadline, isDone, id } = props;
  const isDoneHandler = ({ target: { checked } }) =>
    updateTodoRequest({ id, values: { isDone: checked } });
  const todoDelete = () => deleteTodoRequest(id);

  return (
    <article>
      <ul>
        {props.map(({ id, ...todo }) => (
          <li key={id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2> TodoID:{id} </h2>
              <div>ToDo:{body}</div>
              <div>DeadlineDate: {deadline}</div>
              <input
                type='checkbox'
                checked={isDone}
                onChange={isDoneHandler}
              />
            </div>
            <button onClick={todoDelete}>Delete ToDo</button>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Todo;
