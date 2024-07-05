import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slides/user/user";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
