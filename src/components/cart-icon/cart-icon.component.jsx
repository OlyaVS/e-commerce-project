import { CartIconContainer, CartIconElement, ItemsCount } from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { toggleCart } from '../../store/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemsCount = useSelector(selectCartItemsCount);

  const toggleIsCartOpen = () => {
    dispatch(toggleCart(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <CartIconElement className="cart-icon" />
      <ItemsCount>{cartItemsCount}</ItemsCount>
    </CartIconContainer>
  );
};

export default CartIcon;
