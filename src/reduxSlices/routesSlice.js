import { createSlice } from "@reduxjs/toolkit";
import { parse } from "query-string";

const routesSlice = createSlice({
  name: "routes",
  initialState: {
    queryParams: null,
  },
  reducers: {
    processQueryParams: (state, action) => {
      state.queryParams = parse(window.location.search);
    },
  },
  extraReducers: {},
});

export const { processQueryParams } = routesSlice.actions;

export default routesSlice.reducer;
