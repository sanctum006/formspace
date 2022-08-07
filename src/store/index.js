import { configureStore } from "@reduxjs/toolkit";

import routes from "./../reduxSlices/routesSlice";

export default configureStore({
  reducer: {
    routes,
  },
});
