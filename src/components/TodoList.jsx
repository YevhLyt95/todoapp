// Component TodoList takes the array of todos and functions onToggle, onDelete
// and show task list with TodoItem

import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}           // pass object todo у TodoItem
          onToggle={onToggle}   // function of status changing(done/not done)
          onDelete={onDelete}   // delete function
        />
      ))}
    </ul>
  );
};

export default TodoList;
