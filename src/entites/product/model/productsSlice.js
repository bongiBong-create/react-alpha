import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE__URL } from "../../../shared/api";
import axios from "axios";

const initialState = {
  products: [],
  favoriteProducts: [],
  productPerPage: 10,
  currentPage: 1,
  filter: "all",
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${BASE__URL}/products`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    addFavoriteProduct: (state, action) => {
      state.favoriteProducts.push(action.payload);
    },
    removeFavoriteProduct: (state, action) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
    toggleFilter: (state, action) => {
      state.filter = action.payload;
    },
    addCurrentPage: (state, action) => {
      state.currentPage += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      });
  },
});

export const {
  deleteProduct,
  addFavoriteProduct,
  removeFavoriteProduct,
  createProduct,
  toggleFilter,
  addCurrentPage,
} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
