import api from "./axios";
export const getTodos = async () => {
  const res = await api.get("/todos");
  return res.data.data.items;
};

export const addTodo = async (name) => {
  const res = await api.post("/todos", { name, done: false });
  return { id: res.data.data.id, name, done: false };
};

export const updateTodo = async (todo) => {
  const res = await api.put(`/todos/${todo.id}`, { done: todo.done });
  return todo;
};

export const deleteTodo = async (id) => {
  const res = await api.delete(`/todos/${id}`);
  return { id };
};
