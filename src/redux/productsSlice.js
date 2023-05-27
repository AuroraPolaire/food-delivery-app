import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  fetchSeafood,
  getChickenList,
  getDessertsList,
  getVeganList,
  sendUserOrder,
} from "./productsOperations";

const productsSlice = createSlice({
  name: "delivery",
  initialState: {
    seafood: [],
    desserts: [],
    vegan: [],
    chicken: [],
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
      .addCase(fetchSeafood.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchSeafood.fulfilled, (state, { payload }) => {
        state.seafood = payload;
        state.loading = false;
      })
      .addCase(fetchSeafood.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getDessertsList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getDessertsList.fulfilled, (state, { payload }) => {
        state.desserts = payload;
        state.loading = false;
      })
      .addCase(getDessertsList.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getVeganList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getVeganList.fulfilled, (state, { payload }) => {
        state.vegan = payload;
        state.loading = false;
      })
      .addCase(getVeganList.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getChickenList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getChickenList.fulfilled, (state, { payload }) => {
        state.chicken = payload;
        state.loading = false;
      })
      .addCase(getChickenList.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(sendUserOrder.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(sendUserOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.order.push(payload);
      })
      .addCase(sendUserOrder.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart", "seafood", "desserts", "vegan", "chicken"],
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
