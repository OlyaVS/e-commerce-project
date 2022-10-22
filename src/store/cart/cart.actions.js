import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const incrementItem = (items, itemToIncrement) => {
  const existingItemIndex = items.findIndex((item) => itemToIncrement.id === item.id);

  if (existingItemIndex > -1) {
    const products = Array.from(items);
    products[existingItemIndex].quantity++;
    return products;
  }

  return [...items, { ...itemToIncrement, quantity: 1 }];
};

const decrementItem = (items, itemToDecrease) => {
  const existingItemIndex = items.findIndex((item) => itemToDecrease.id === item.id);
  const products = Array.from(items);
  const quantity = products[existingItemIndex].quantity;

  if (quantity > 1) {
    products[existingItemIndex].quantity--;
    return products;
  }

  products.splice(existingItemIndex, 1);
  return products;
};

const deleteItem = (items, itemToDelete) => {
  const existingItemIndex = items.findIndex((item) => itemToDelete.id === item.id);
  const products = Array.from(items);
  products.splice(existingItemIndex, 1);
  return products;
};

export const incrementCartItem = (cartItems, product) => {
  const newCartItems = incrementItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decrementCartItem = (cartItems, product) => {
  const newCartItems = decrementItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteCartItem = (cartItems, product) => {
  const newCartItems = deleteItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const toggleCart = (boolean) => createAction(CART_ACTION_TYPES.TOGGLE_CART, boolean);
