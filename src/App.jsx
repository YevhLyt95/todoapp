// App.jsx
import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

const LOCAL_STORAGE_KEY = 'todo-list';

const App = () => {
  // main task list
  const [todos, setTodos] = useState([]);
  // current filter: all | active | completed
  const [filter, setFilter] = useState('all');

  // loading from localStorage on start
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (saved) setTodos(saved);
  }, []);

  // saving to local storage during every change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">ToDo App</h1>
        <TodoForm onAdd={addTodo} />
        <FilterButtons currentFilter={filter} setFilter={setFilter} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
