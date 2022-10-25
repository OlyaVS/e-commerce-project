import { CartItem } from './cart.types';
import { AnyAction } from 'redux';
import { setCartItems, toggleCart } from './cart.actions';

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
};

export const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if (toggleCart.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
