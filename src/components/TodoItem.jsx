//component of every task in the list
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-white dark:bg-blue-900 rounded shadow p-2 mb-2">
      <span
        className={`flex-1 cursor-pointer ${todo.completed
        ? "line-through text-gray-400"
        : "text-black dark:text-white"}`}

        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}