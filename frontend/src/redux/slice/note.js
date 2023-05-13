import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAll = createAsyncThunk("fetchAll", async () => {
  const resp = await axios.get("http://localhost:3001/notes/");
  return resp.data;
});

export const addNote = createAsyncThunk("addNote", async (payload) => {
  const resp = await axios.post("http://localhost:3001/notes/", {
    note: payload,
  });

  console.log(resp.data);
  return resp.data;
});

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default notesSlice.reducer;
