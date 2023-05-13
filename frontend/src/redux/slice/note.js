import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAll = createAsyncThunk("fetchAll", async () => {
  const response = await fetch("http://localhost:3001/notes/");
  const notes = await response.json();
  return notes;
});

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

export default notesSlice.reducer;
