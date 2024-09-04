import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../utils/supabase";

export const getTodosAction = createAsyncThunk("todos/getTodosAction", async () => {
  return await getTodos();
});

export const addTodoAction = createAsyncThunk("todos/addTodoAction", async (name) => {
  return await addTodo(name);
});

export const deleteTodoAction = createAsyncThunk("todos/deleteTodoAction", async (id) => {
  return await deleteTodo(id);
});

export const updateTodoAction = createAsyncThunk("todos/updateTodoAction", async (todo) => {
  return await updateTodo(todo);
});



