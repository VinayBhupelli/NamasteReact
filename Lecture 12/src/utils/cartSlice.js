import { createSlice, current } from "@reduxjs/toolkit";

// createSlice is a configuration
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //   Mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // console.log(current(state));
      state.items.length = 0; // state = []
      // or return {items : []};
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
