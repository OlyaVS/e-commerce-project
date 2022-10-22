import './checkout.styles';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>

      {cartItems.length > 0 &&
        cartItems.map((item) => {
          return <CheckoutItem key={item.id} item={item} />;
        })}

      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
