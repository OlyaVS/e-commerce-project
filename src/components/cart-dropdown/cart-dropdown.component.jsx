import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return (
              <div key={item.id}>
                <span className="quantity">10</span>
                <span>x</span>
                <span className="price">100</span>
                <div className="footer">
                  <span>Total Price:</span>
                  <span>10000</span>
                </div>
              </div>
            );
          })}
        {cartItems.length <= 0 && <span className="empty-message">Your card is empty</span>}
      </div>
      <Button type="button">Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
