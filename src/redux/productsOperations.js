import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../services/productsApi";

export const fetchProducts = createAsyncThunk("get", async (_, thunkAPI) => {
  try {
    const products = await getProducts();
    return products;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
