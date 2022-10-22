// cart items - cardDropDown, checkout
// is CartOpen - navigation
// cartItemsCount - cartIcon
// cartTotal - checkout

import { createSelector } from 'reselect';

const selectCartItemsReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartItemsReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartItemsReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartItemsCount = createSelector([selectCartItemsReducer], (cartSlice) =>
  cartSlice.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItemsReducer], (cartSlice) =>
  cartSlice.cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);
