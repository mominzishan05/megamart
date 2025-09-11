import { createSlice } from "@reduxjs/toolkit";

// LocalStorage se cart load karna
const loadCart = () => {
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
};

const initialState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removecart: (state, action) => {
      state.items = state.items.filter((value) => value.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearcart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addtocart, removecart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
