const STORAGE_KEY = "todos";

export const getTodos = () => {
  const todos = localStorage.getItem(STORAGE_KEY);
  return todos ? JSON.parse(todos) : [];
};

export const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const addTodo = (todo) => {
  const todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
};

export const deleteTodo = (id) => {
  const todos = getTodos().filter((todo) => todo.id !== id);
  saveTodos(todos);
};

export const toggleTodo = (id) => {
  const todos = getTodos().map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );

  saveTodos(todos);
};
