import axios from 'axios';
import queryString from 'query-string';


const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTodo = () => {};

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
