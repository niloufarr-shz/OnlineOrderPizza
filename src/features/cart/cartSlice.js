import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  
  
  /* [
    {
      pizzaId: 12,
      name: 'spinachi',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32, // اصلاح: 2 * 16 = 32
    },
  ], */
};

const cartSlice = createSlice({
  name: 'cart',
  initialState, // اصلاح: استفاده از initialState به جای initilState
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        // اگر تعداد به صفر رسید، آیتم را حذف کن
        if (item.quantity === 0) {
          state.cart = state.cart.filter(
            (item) => item.pizzaId !== action.payload
          );
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;



//selectors to manipulate the state that comes from redux 

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
