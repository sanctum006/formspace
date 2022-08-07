import { configureStore } from "@reduxjs/toolkit";

import router from "../reduxSlices/routerSlice";

export default configureStore({
  reducer: {
    router,
  },
});
