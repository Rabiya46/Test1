import { createSlice } from "@reduxjs/toolkit";
import { COUNTER } from "./counterThunk";

const initialState = {
  value: 0,
  users: [],
  isLoading: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    incrementByCount: (state, action) => {
      state.value = state.value + action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(COUNTER.getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(COUNTER.getAllUsers.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(COUNTER.getAllUsers.fulfilled, (state, action) => {
        console.log(action, "action");

        state.users = action.payload;
        // users [] = [{...}]
      });
  },
});

export const { increment, incrementByCount } = counterSlice.actions;
export default counterSlice.reducer;
