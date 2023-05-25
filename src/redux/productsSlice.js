import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchProducts } from "./productsOperations";

const productsSlice = createSlice({
  name: "delivery",
  initialState: {
    shops: ["Egersund", "Food Market", "Domino", "Chelentano", "Mafia"],
    products: [],
    cart: [],
    total: 0,
    loading: false,
    error: false,
  },
  reducers: {
    addProduct(state, { payload }) {
      state.cart.push(payload);
    },
    removeProduct(state, { payload }) {
      const index = state.cart.findIndex((item) => item.idMeal === payload);
      state.cart.splice(index, 1);
    },
    changeAmount(state, { payload }) {
      const index = state.cart.findIndex(
        (item) => item.idMeal === payload.idMeal
      );
      state.cart[index].amount = Number(payload.value);
    },
    calculateTotal(state) {
      state.total = state.cart.reduce((acc, item) => {
        return acc + item.amount * item.price;
      }, 0);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = true;
      }),
});

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart", "products"],
};

export const { addProduct, removeProduct, changeAmount, calculateTotal } =
  productsSlice.actions;
export const productsReducer = persistReducer(
  persistConfig,
  productsSlice.reducer
);
