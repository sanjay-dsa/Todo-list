import { useState } from "react";

function SearchFilter() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build Todo App", completed: false },
    { id: 3, text: "Practice JavaScript", completed: false },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search & Filter Tasks</h2>

      <input
        type="text"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.text} {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
