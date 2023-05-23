import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Utils/axiosUtil";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (payload) => {
    const resp = await axiosInstance.post("/user/register", payload);
    return resp.data;
  }
);

export const loginUser = createAsyncThunk("loginUser", async (payload) => {
  const resp = await axiosInstance.post("/user/login", payload);
  return resp.data;
});

export const logoutUser = createAsyncThunk("logoutUser", async () => {
  const resp = await axiosInstance.post("/user/logout");
  return resp.data;
});

const userSlice = createSlice({
  name: "Users",
  initialState: { isLoggedIn: false },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      });
  },
});

export default userSlice.reducer;
