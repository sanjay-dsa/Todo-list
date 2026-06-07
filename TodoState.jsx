import React from "react";

const TodoStats = ({ todos }) => {
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-4">
      <h3 className="text-lg font-semibold mb-2">Task Statistics</h3>

      <div className="flex justify-between">
        <div>
          <p className="text-gray-500">Total</p>
          <p className="text-2xl font-bold">{todos.length}</p>
        </div>

        <div>
          <p className="text-green-500">Completed</p>
          <p className="text-2xl font-bold">{completed}</p>
        </div>

        <div>
          <p className="text-red-500">Pending</p>
          <p className="text-2xl font-bold">{pending}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
