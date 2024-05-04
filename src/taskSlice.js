import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
    },
    // Mark or unmark a task as complete
    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // Delete task
    deleteTask: (state, action) => {
      // Find the index where the task and delete button have same id
      const index = state.findIndex((task) => task.id === action.payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTask, toggleComplete, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
