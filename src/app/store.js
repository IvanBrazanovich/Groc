import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/project/projectSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
