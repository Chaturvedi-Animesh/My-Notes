import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slice/note";
import userReducer from "./slice/user";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    users: userReducer,
  },
});

export default store;
