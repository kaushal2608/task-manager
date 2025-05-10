import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
   snackbar:{
    message: '',
    type: 'info',
    visible: false,
  }
},
  reducers: {
    showSnackbar: (state, action) => {
      state.snackbar.message = action.payload.message;
      state.snackbar.type = action.payload.type || 'info';
      state.snackbar.visible = true;
    },
    clearSnackbar: (state) => {
      state.snackbar.visible = false;
      state.snackbar.message = '';
      state.snackbar.type = 'info';
    },
  },
});

export const { showSnackbar, clearSnackbar } = uiSlice.actions;
export default uiSlice.reducer;
