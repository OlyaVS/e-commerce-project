import { createAction, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES, CartItem } from './cart.types';
import { CategoryItem } from '../categories/category.types';

// helper functions
const incrementItem = (items: CartItem[], itemToIncrement: CategoryItem): CartItem[] => {
  const existingItemIndex = items.findIndex((item) => itemToIncrement.id === item.id);

  if (existingItemIndex > -1) {
    const products = Array.from(items);
    products[existingItemIndex].quantity++;
    return products;
  }

  return [...items, { ...itemToIncrement, quantity: 1 }];
};

const decrementItem = (items: CartItem[], itemToDecrease: CartItem): CartItem[] => {
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

const deleteItem = (items: CartItem[], itemToDelete: CartItem): CartItem[] => {
  const existingItemIndex = items.findIndex((item) => itemToDelete.id === item.id);
  const products = Array.from(items);
  products.splice(existingItemIndex, 1);
  return products;
};

// action creators and their types

export type SetCartItem = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItem => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const incrementCartItem = (cartItems: CartItem[], product: CategoryItem): SetCartItem => {
  const newCartItems = incrementItem(cartItems, product);
  return setCartItems(newCartItems);
};

export const decrementCartItem = (cartItems: CartItem[], product: CartItem): SetCartItem => {
  const newCartItems = decrementItem(cartItems, product);
  return setCartItems(newCartItems);
};

export const deleteCartItem = (cartItems: CartItem[], product: CartItem): SetCartItem => {
  const newCartItems = deleteItem(cartItems, product);
  return setCartItems(newCartItems);
};

export type ToggleCart = ActionWithPayload<CART_ACTION_TYPES.TOGGLE_CART, boolean>;

export const toggleCart = withMatcher(
  (boolean: boolean): ToggleCart => createAction(CART_ACTION_TYPES.TOGGLE_CART, boolean)
);

export type CartAction = SetCartItem | ToggleCart;
