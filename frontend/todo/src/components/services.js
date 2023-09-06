import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const getTodos = () => api.get('todos/');
export const createTodo = (todoData) => api.post('todos/', todoData);
export const updateTodo = (todoId, todoData) => api.put(`todos/${todoId}/`, todoData);
export const deleteTodo = (todoId) => api.delete(`todos/${todoId}/`);

export default api;
