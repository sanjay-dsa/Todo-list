import React, { useState } from "react";

const FilterModule = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build Todo App", completed: false },
    { id: 3, text: "Practice JavaScript", completed: true },
    { id: 4, text: "Learn Node.js", completed: false },
  ]);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed") {
      return todo.completed && matchesSearch;
    }

    if (filter === "pending") {
      return !todo.completed && matchesSearch;
    }

    return matchesSearch;
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Todo Filters
      </h2>

      <input
        type="text"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
          className="px-4 py-2 bg-orange-500 text-white rounded"
        >
          Pending
        </button>
      </div>

      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`p-3 rounded border ${
              todo.completed
                ? "bg-green-100"
                : "bg-orange-100"
            }`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterModule;
