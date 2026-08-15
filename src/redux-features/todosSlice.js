import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("action.payload in addTodo:", action);
      const newTask = {
        id: Date.now(),
        title: action.payload.taskName,
        isComplete: false,
        buttonColor: "white",
      };
      state.todos.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newTitle;
      }
      localStorage.setItem("tasks", JSON.stringify(state.todos));
    },
    handleCompleted: (state, action) => {
      const { id, isCompleted } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isComplete = isCompleted;
        todo.buttonColor = isCompleted ? "green" : "white";
      }
      localStorage.setItem("tasks", JSON.stringify(state.todos));
    },
    setTodos: (state, action) => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      state.todos = storedTasks;
    },
  },
});
export const { addTodo, removeTodo, editTodo, handleCompleted, setTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
