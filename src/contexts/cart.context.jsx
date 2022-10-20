import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

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

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART: 'TOGGLE_CART',
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartItemsCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      return new Error(`Unhandled type ${type} in the cartReducer`);
  }
};

export const CartContext = createContext({
  cartItems: [],
  incrementCartItem: () => null,
  decrementCartItem: () => null,
  deleteCartItem: () => null,
  isCartOpen: false,
  toggleCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, isCartOpen, cartItemsCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const payload = {
      cartItems: newCartItems,
      cartItemsCount: newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
      cartTotal: newCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      ),
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const incrementCartItem = (product) => {
    const newCartItems = incrementItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };
  const decrementCartItem = (product) => {
    const newCartItems = decrementItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };
  const deleteCartItem = (product) => {
    const newCartItems = deleteItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const toggleCart = () => {
    const payload = {
      isCartOpen: !isCartOpen,
    };
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART, payload));
  };

  const value = {
    cartItems,
    incrementCartItem,
    decrementCartItem,
    deleteCartItem,
    isCartOpen,
    toggleCart,
    cartItemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
