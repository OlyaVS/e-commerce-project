import { createContext, useState } from 'react';

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

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItemsCount: 0,
  setCartItemsCount: () => null,
  cartTotal: 0,
  setCartTotal: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const incrementCartItem = (product) => {
    setCartItems(incrementItem(cartItems, product));
    setCartItemsCount(cartItemsCount + 1);
    setCartTotal(cartTotal + product.price);
  };

  const decrementCartItem = (product) => {
    setCartItems(decrementItem(cartItems, product));
    setCartItemsCount(cartItemsCount ? cartItemsCount - 1 : 0);
    setCartTotal(cartTotal ? cartTotal - product.price : 0);
  };

  const deleteCartItem = (product) => {
    setCartItems(deleteItem(cartItems, product));
    setCartItemsCount(cartItemsCount - product.quantity);
    setCartTotal(cartTotal - product.price * product.quantity);
  };

  const value = {
    cartItems,
    incrementCartItem,
    decrementCartItem,
    deleteCartItem,
    isCartOpen,
    setIsCartOpen,
    cartItemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
