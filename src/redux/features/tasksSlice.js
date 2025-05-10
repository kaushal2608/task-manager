import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(task) {
        return {
          payload: {
            ...task,
            id: nanoid(),
          },
        };
      },
    },
    editTask(state, action) {
      const { id, updatedTask } = action.payload;
      const index = state.findIndex(task => task.id === id);
      if (index !== -1) state[index] = { ...state[index], ...updatedTask };
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
