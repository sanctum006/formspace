import { configureStore } from "@reduxjs/toolkit";

import router from "../reduxSlices/routerSlice";
import form from "../reduxSlices/formSlice";

export default configureStore({
  reducer: {
    router,
    form,
  },
});
