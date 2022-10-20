import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, CartIconElement, ItemsCount } from './cart-icon.styles';

const CartIcon = () => {
  const { cartItemsCount, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <CartIconElement className="cart-icon" />
      <ItemsCount>{cartItemsCount}</ItemsCount>
    </CartIconContainer>
  );
};

export default CartIcon;
