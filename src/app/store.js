import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux-features/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
console.log("store", store.getState());
