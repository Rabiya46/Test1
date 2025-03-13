import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllUsers = createAsyncThunk("counter/getAllUsers", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return data;  // []
});

export const COUNTER = { getAllUsers };
