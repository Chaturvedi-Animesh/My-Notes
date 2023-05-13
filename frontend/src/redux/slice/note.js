import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchAll = createAsyncThunk("fetchAll", async () => {
  const resp = await axios.get("http://localhost:3001/notes/")
  return resp.data;
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
