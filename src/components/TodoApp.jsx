import { useState } from "react";

// Custom SVG Icons as Components
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const TrashIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
);

const EditIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
  >
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Complete project proposal",
      completed: false,
      dueDate: "2024-11-01",
      priority: "high",
    },
    {
      id: 2,
      text: "Review team updates",
      completed: true,
      dueDate: "2024-10-30",
      priority: "medium",
    },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
        dueDate,
        priority,
      },
    ]);
    setNewTodo("");
    setDueDate("");
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

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditingId(null);
    setEditText("");
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden text-black">
      <div className="p-6 bg-blue-500">
        <h2 className="text-2xl font-bold text-white">Todo List</h2>
      </div>

      <div className="p-6">
        {/* Search Bar */}
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>

        <form onSubmit={addTodo} className="flex flex-col gap-4 mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-2 border rounded-lg"
            />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="p-2 border rounded-lg"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="p-2 border rounded-lg"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>

        <div className="space-y-3">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center gap-2 p-4 border rounded-lg ${
                todo.completed ? "bg-gray-50" : ""
              }`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex-shrink-0 ${
                  todo.completed ? "text-green-500" : "text-gray-400"
                }`}
              >
                {todo.completed ? <CheckIcon /> : <CircleIcon />}
              </button>

              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 p-2 border rounded-lg"
                  onBlur={() => saveEdit(todo.id)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
                  autoFocus
                />
              ) : (
                <span
                  className={`flex-1 ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>
              )}

              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-medium ${getPriorityColor(
                    todo.priority
                  )}`}
                >
                  {todo.priority}
                </span>

                {todo.dueDate && (
                  <span className="flex items-center text-sm text-gray-500">
                    <span className="mr-1">
                      <CalendarIcon />
                    </span>
                    {todo.dueDate}
                  </span>
                )}

                <button
                  onClick={() => startEdit(todo)}
                  className="text-blue-500 hover:text-blue-600 p-1"
                >
                  <EditIcon />
                </button>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-600 p-1"
                >
                  <TrashIcon />
                </button>
              </div>
            </div>
          ))}

          {filteredTodos.length === 0 && searchTerm && (
            <div className="text-center py-8 text-gray-500">
              No todos found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
