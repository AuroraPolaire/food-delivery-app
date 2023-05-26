import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchProducts, sendUserOrder } from "./productsOperations";

const productsSlice = createSlice({
  name: "delivery",
  initialState: {
    products: [],
    cart: [],
    total: 0,
    order: [],
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
    emptyCart(state) {
      state.cart = [];
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
      })
      .addCase(sendUserOrder.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(sendUserOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.order.push(payload);
      })
      .addCase(sendUserOrder.rejected, (state) => {
        state.error = true;
      }),
});

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart", "products"],
};

export const {
  addProduct,
  removeProduct,
  changeAmount,
  calculateTotal,
  emptyCart,
} = productsSlice.actions;
export const productsReducer = persistReducer(
  persistConfig,
  productsSlice.reducer
);
