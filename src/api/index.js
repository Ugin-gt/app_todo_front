import axios from 'axios';
import { BASE_URL } from '../config';
import QS from 'query-string';

const httpClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const createTodo = ({ userId = 1, ...todo } = {}) =>
  httpClient.post(`/todos/users/${userId}`, todo);

export const getTodos = ({ userId = 7, page = 1, limit = 5 }) =>
  httpClient.get(`/todos/users/${userId}?${QS.stringify({ page, limit })}`);

export const deleteTodo = ({ todoId } = {}) =>
  httpClient.delete(`/todos/${todoId}`);

export const createUser = data => {
  const responsePromise = httpClient.post('/users', data);
  return responsePromise;
};

export const getUsers = ({ offset = 0, limit = 5 } = {}) => {
  const promise = httpClient.get(`/users${QS.stringify({ limit, offset })}`);
  return promise;
};

export default httpClient;
