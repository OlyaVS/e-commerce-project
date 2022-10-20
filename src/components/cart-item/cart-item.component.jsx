import './cart-item.styles';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <h2>{name}</h2>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
