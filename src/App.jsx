import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ThemeToggle from './components/ThemeToggle';

const LOCAL_STORAGE_KEY = 'todo-list';

const App = () => {
  // Основний список задач
  const [todos, setTodos] = useState([]);
  // Поточний фільтр: all | active | completed
  const [filter, setFilter] = useState('all');
  // Стан теми: true - темна, false - світла
  const [darkMode, setDarkMode] = useState(false);

  // Завантаження з localStorage при старті
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedTodos) setTodos(savedTodos);

    // Завантаження теми з localStorage, якщо є
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') setDarkMode(true);
  }, []);

  // Збереження задач у localStorage при зміні
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Збереження теми у localStorage та оновлення класу dark у <html>
  useEffect(() => {
    
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-center flex-grow">ToDo App</h1>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <TodoForm onAdd={addTodo} />
        <FilterButtons currentFilter={filter} setFilter={setFilter} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
