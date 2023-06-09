import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Utils/axiosUtil";

export const fetchAll = createAsyncThunk("fetchAll", async () => {
  const resp = await axiosInstance.get("/notes");
  return resp.data;
});

export const addNote = createAsyncThunk("addNote", async (payload) => {
  const resp = await axiosInstance.post("/notes", {
    note: payload,
  });
  return resp.data;
});

export const updateNote = createAsyncThunk("updateNote", async (payload) => {
  const resp = await axiosInstance.put(`/notes/${payload.id}`, {
    note: payload.text,
  });
  return resp.data;
});

export const deleteNote = createAsyncThunk("deleteNote", async (payload) => {
  const resp = await axiosInstance.delete(`/notes/${payload}`);
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
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        state.forEach((note) => {
          if (note._id === action.payload._id) {
            note.note = action.payload.note;
          }
        });
      });
  },
});

export default notesSlice.reducer;
