import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";

const API = "http://65.108.148.136:8072/";

export const getData = createAsyncThunk("project/getData", async () => {
  try {
    let { data } = await axiosRequest.get(`${API}Product/get-products`);
    return data.data.products;
  } catch (error) {
    console.log(error);
  }
});

export const postCard = createAsyncThunk(`project/postCard`, async (id) => {
  try {
    let { data } = await axiosRequest.post(
      `${API}Cart/add-product-to-cart?id=${id}`
    );
  } catch (error) {
    console.log(error);
  }
});

export const getProductById = createAsyncThunk(
  "project/getProductById",
  async (id) => {
    try {
      let { data } = await axiosRequest.get(
        `${API}Product/get-product-by-id?id=${id}`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCard = createAsyncThunk(`project/getCard`, async () => {
  try {
    let { data } = await axiosRequest.get(`${API}Cart/get-products-from-cart`);
    return data.data[0].productsInCart;
  } catch (error) {
    console.log(error);
  }
});

export const reduceProduct = createAsyncThunk(
  "project/reduceProduct",
  async (id) => {
    try {
      let { data } = await axiosRequest.put(
        `${API}Cart/reduce-product-in-cart?id=${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteCart = createAsyncThunk(
  "todos/deleteCart",
  async (id, { dispatch }) => {
    try {
      let { data } = await axiosRequest.delete(
        `Cart/delete-product-from-cart?id=${id}`
      );
      dispatch(getCard(data));
    } catch (error) {
      console.error(error);
    }
  }
);
export const clearCart = createAsyncThunk(
  "todos/clearCart",
  async (_, { dispatch }) => {
    try {
      let { data } = await axiosRequest.delete("Cart/clear-cart");
      dispatch(getCard(data));
    } catch (error) {
      console.error(error);
    }
  }
);
export const increase = createAsyncThunk(
  "todos/increase",
  async (id, { dispatch }) => {
    try {
      let { data } = await axiosRequest.put(
        `Cart/increase-product-in-cart?id=${id}`
      );
      dispatch(getCard());
    } catch (error) {
      console.error(error);
    }
  }
);
export const counterSlice = createSlice({
  name: "project",
  initialState: {
    data: [],
    products: [],
    productsCart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log(2);
      state.data = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
    });
    builder.addCase(getCard.fulfilled, (state, action) => {
      console.log(action.payload);
      state.productsCart = action.payload;
    });
  },
});

export default counterSlice.reducer;
