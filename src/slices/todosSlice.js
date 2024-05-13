import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    status: "active",
    title: "Host app in GitHub",
    description: "Deploy application on GitHub, create readme.",
  },
  {
    id: nanoid(),
    status: "active",
    title: "Send message",
    description: "Send results to Tim Werkhoven and wait for response.",
  },
  {
    id: nanoid(),
    status: "completed",
    title: "Lobium.ai test task",
    description:
      "Build new Todo app. Features: 1. Display existing todo. 2: Add feature to change a TODO state. 3: Add feature to create new TODO.",
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, description, status = "active") {
        return { payload: { id: nanoid(), title, description, status } };
      },
    },
    toggleTodoState(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state[index].status =
          state[index].status === "active" ? "completed" : "active";
        state.sort((a, b) => (a.status === "completed" ? 1 : -1));
      }
    },
  },
});

export const { addTask, toggleTodoState } = todosSlice.actions;
export default todosSlice.reducer;
