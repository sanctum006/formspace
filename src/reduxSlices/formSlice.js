import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    sidebars: {
      QUESTIONS_SIDEBAR: true,
      QUESTION_DETAILS_SIDEBAR: true,
    },
  },
  reducers: {
    openSidebar: (state, action) => {
      console.log("sidebar", state.sidebars[action.payload.sidebar]);
      state.sidebars[action.payload.sidebar] = false;
    },
    closeSidebar: (state, action) => {
      state.sidebars[action.payload.sidebar] = true;
    },
  },
  extraReducers: {},
});

export const { openSidebar, closeSidebar } = formSlice.actions;

export default formSlice.reducer;
