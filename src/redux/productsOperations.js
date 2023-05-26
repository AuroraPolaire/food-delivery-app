import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../services/productsApi";
import { sendOrder } from "../services/sendOrderApi";

export const fetchProducts = createAsyncThunk("get", async (_, thunkAPI) => {
  try {
    const products = await getProducts();
    return products;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const sendUserOrder = createAsyncThunk(
  "post",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const order = await sendOrder();
      return order;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
