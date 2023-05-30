import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChicken } from "../services/chickenApi";
import { getDessert } from "../services/dessertsApi";
import { getSeafood } from "../services/seafoodApi";
import { getOrder } from "../services/getOrderApi";
import { getVegan } from "../services/vegeterianApi";
import { sendOrder } from "../services/sendOrderApi";

export const fetchSeafood = createAsyncThunk(
  "getSeafood",
  async (_, thunkAPI) => {
    try {
      const seafood = await getSeafood();
      return seafood;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDessertsList = createAsyncThunk(
  "getDesserts",
  async (_, thunkAPI) => {
    try {
      const desserts = await getDessert();
      return desserts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getVeganList = createAsyncThunk(
  "getVegan",
  async (_, thunkAPI) => {
    try {
      const vegan = await getVegan();

      return vegan;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getChickenList = createAsyncThunk(
  "geChicken",
  async (_, thunkAPI) => {
    try {
      const chicken = await getChicken();
      return chicken;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendUserOrder = createAsyncThunk(
  "post",
  async (data, thunkAPI) => {
    try {
      const order = await sendOrder(data);
      return order;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserOrder = createAsyncThunk("get", async (id, thunkAPI) => {
  try {
    const order = await getOrder(id);
    return order;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
