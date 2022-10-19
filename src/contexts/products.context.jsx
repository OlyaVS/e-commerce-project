import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  // will run only once and the comment it
  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA, 'title');
  }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
