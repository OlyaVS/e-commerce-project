import { createContext, useState } from 'react';

const addCartItem = (items, itemToAdd) => {
  const existingItemIndex = items.findIndex((item) => itemToAdd.id === item.id);

  if (existingItemIndex > -1) {
    const products = Array.from(items);
    products[existingItemIndex].quantity++;
    return products;
  }

  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItemsCount: 0,
  setCartItemsCount: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
    setCartItemsCount(cartItemsCount + 1);
  };

  const value = { cartItems, addItemToCart, isCartOpen, setIsCartOpen, cartItemsCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
