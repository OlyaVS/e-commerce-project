import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        {cartItems.length === 0 && <span className="empty-message">Your card is empty</span>}
      </div>
      <Button type="button">Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
