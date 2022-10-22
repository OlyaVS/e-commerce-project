import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} type="button" onClick={goToCheckout}>
        Go to Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
