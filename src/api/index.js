import axios from 'axios';
import { BASE_URL } from '../config';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const createTodo = () => {};

export const getTodos = ({ userId = 1 }) =>
  httpClient.get(`/users/${userId}/todos`);

export const createUser = data => {
  const responsePromise = httpClient.post('/users', data);
  return responsePromise;
};

export const getUsers = ({ offset = 0, limit = 5 } = {}) => {
  const promise = httpClient.get(
    `/users${queryString.stringify({ limit, offset })}`
  );
  return promise;
};
