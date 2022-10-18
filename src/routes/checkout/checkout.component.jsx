import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <ul className="checkout-header">
        <li className="header-block">Product</li>
        <li className="header-block">Description</li>
        <li className="header-block">Quantity</li>
        <li className="header-block">Price</li>
        <li className="header-block">Remove</li>
      </ul>

      {cartItems.length > 0 &&
        cartItems.map((item) => {
          return <CheckoutItem key={item.id} item={item} />;
        })}

      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
