import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!task.trim()) return;

    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId
            ? { ...todo, text: task }
            : todo
        )
      );

      setEditId(null);
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: task,
          completed: false,
        },
      ]);
    }

    setTask("");
  };

  const handleEdit = (todo) => {
    setTask(todo.text);
    setEditId(todo.id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Todo App
      </h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className="border p-2 flex-1"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border p-2 mb-2"
          >
            <span>{todo.text}</span>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(todo)}
                className="bg-yellow-500 text-white px-2 py-1"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
