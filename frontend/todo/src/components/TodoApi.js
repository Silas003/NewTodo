import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTodos(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleCreateTodo = async () => {
    try {
      const response = await axios.post(apiUrl, { title: newTodo, completed: false });
      console.log('New todo created:', response.data);
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const handleEditTodo = async (todo) => {
    try {
      const response = await axios.put(`${apiUrl}/${todo.id}`, { title: todo.title, completed: todo.completed });
      console.log('Todo updated:', response.data);
      setTodos(todos.map((item) => (item.id === todo.id ? response.data : item)));
      setEditingTodo(null);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      console.log('Todo deleted:', id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'pink', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>TodoApp</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px', marginBottom: '25px', borderRadius: '12px' }}>
        <input
          type="text"
          placeholder="Create New task"
          style={{ padding: '10px', backgroundColor: 'white', width: '80%' }}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button style={{ backgroundColor: 'green', padding: '10px', borderRadius: '6px', marginLeft: '12px' }} onClick={handleCreateTodo}>
          Add
        </button>
      </div>
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>Do The Best You can</h2>
      <ul
  
      style={{ listStyleType: 'none', backgroundColor: 'dodgerblue', border: 2,padding:10, borderRadius: 12,width:500,alignItems:'center' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginTop: '10px', padding: '10px', backgroundColor: 'pink', border: '2px solid black', borderRadius: '12px' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => handleEditTodo({ ...todo, completed: e.target.checked })}
            />
            {editingTodo === todo.id ? (
              <input
                type="text"
                value={todo.title}
                onChange={(e) => setTodos(todos.map((item) => (item.id === todo.id ? { ...item, title: e.target.value } : item)))}
              />
            ) : (
              <div style={{ color: 'white', marginRight: '10px' }}>{todo.title}</div>
            )}
            {editingTodo === todo.id ? (
              <button
                style={{ backgroundColor: 'gold', padding: '10px', borderRadius: '6px', marginRight: '12px' }}
                onClick={() => handleEditTodo(todo)}
              >
                Save
              </button>
            ) : (
              <button
                style={{ backgroundColor: 'gold', padding: '10px', borderRadius: '6px', marginRight: '12px' }}
                onClick={() => setEditingTodo(todo.id)}
              >
                Edit
              </button>
            )}
            <button
              style={{ backgroundColor: 'red', padding: '10px', borderRadius: '6px', marginLeft: '0' }}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
