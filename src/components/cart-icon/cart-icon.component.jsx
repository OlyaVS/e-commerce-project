import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, CartIconElement, ItemsCount } from './cart-icon.styles';

const CartIcon = () => {
  const { cartItemsCount, toggleCart } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    toggleCart();
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <CartIconElement className="cart-icon" />
      <ItemsCount>{cartItemsCount}</ItemsCount>
    </CartIconContainer>
  );
};

export default CartIcon;
