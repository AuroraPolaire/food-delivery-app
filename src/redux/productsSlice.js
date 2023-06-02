import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  fetchSeafood,
  getChickenList,
  getDessertsList,
  getUserOrder,
  getVeganList,
  sendUserOrder,
} from "./productsOperations";

const extraActions = [
  fetchSeafood,
  getDessertsList,
  getVeganList,
  getChickenList,
  sendUserOrder,
  getUserOrder,
];

const getActions = (type) => extraActions.map((action) => action[type]);

const productsSlice = createSlice({
  name: "delivery",
  initialState: {
    storeName: "",
    seafood: [],
    desserts: [],
    vegan: [],
    chicken: [],
    cart: [],
    total: 0,
    order: {},
    disableButton: false,
    loading: false,
    error: false,
  },
  reducers: {
    addStoreName(state, { payload }) {
      state.storeName = payload;
    },
    addProduct(state, { payload }) {
      state.cart.push(payload);
      state.disableButton = false;
    },
    removeProduct(state, { payload }) {
      const index = state.cart.findIndex((item) => item.idMeal === payload);
      state.cart.splice(index, 1);
      if (state.cart.length === 0) state.storeName = "";
      if (state.cart.length === 0) state.disableButton = true;
    },
    disableButton(state) {
      state.disableButton = !state.disableButton;
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
      .addCase(fetchSeafood.fulfilled, (state, { payload }) => {
        state.seafood = payload;
        state.loading = false;
      })
      .addCase(getDessertsList.fulfilled, (state, { payload }) => {
        state.desserts = payload;
        state.loading = false;
      })
      .addCase(getVeganList.fulfilled, (state, { payload }) => {
        state.vegan = payload;
        state.loading = false;
      })
      .addCase(getChickenList.fulfilled, (state, { payload }) => {
        state.chicken = payload;
        state.loading = false;
      })
      .addCase(sendUserOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.order = payload;
      })
      .addCase(getUserOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.order = payload;
      })
      .addMatcher(isAnyOf(...getActions("pending")), (state) => {
        state.error = false;
        state.loading = true;
      })
      .addMatcher(isAnyOf(...getActions("rejected")), (state) => {
        state.error = true;
        state.loading = false;
      }),
});

const persistConfig = {
  key: "cart",
  storage,
  whitelist: [
    "cart",
    "seafood",
    "desserts",
    "vegan",
    "chicken",
    "storeName",
    "disableButton",
  ],
};

export const {
  addProduct,
  removeProduct,
  changeAmount,
  calculateTotal,
  emptyCart,
  addStoreName,
  disableButton,
} = productsSlice.actions;
export const productsReducer = persistReducer(
  persistConfig,
  productsSlice.reducer
);
