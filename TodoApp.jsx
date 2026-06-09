import { useState, useEffect } from "react";

function TodoApp() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-5 max-w-md mx-auto">
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
          onClick={addTodo}
          className="bg-blue-500 text-white px-4"
        >
          Add
        </button>
      </div>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between border p-2 mb-2"
          >
            {todo.text}

            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
