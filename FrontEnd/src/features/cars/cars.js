import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cars: [],
  loading: false,
  error: false,
};

export const getCars = createAsyncThunk(
  "cars/getallcars",
  async (data, { rejectWithValue }) => {
    const res = await axios.get("http://localhost:8080/cars/getallcars");
    return res.data;
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCars.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.cars = payload;
    });
    builder.addCase(getCars.rejected, (state) => {
      state.error = true;
    });
  },
});

export default carsSlice.reducer;
