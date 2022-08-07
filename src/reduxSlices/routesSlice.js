import { createSlice } from "@reduxjs/toolkit";

const routesSlice = createSlice({
  name: "routes",
  initialState: {
    queryParams: null,
  },
  reducers: {},
  extraReducers: {},
});

export const {} = routesSlice.actions;

export default routesSlice.reducer;
