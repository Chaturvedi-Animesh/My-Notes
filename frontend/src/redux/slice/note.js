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
  return resp.data;
});

export const deleteNote = createAsyncThunk("deleteNote", async (payload) => {
  const resp = await axios.delete(`http://localhost:3001/notes/${payload}`);
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
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        return state.filter((note) => note._id !== action.payload._id);
      });
  },
});

export default notesSlice.reducer;
