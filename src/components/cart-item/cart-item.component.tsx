import { FC } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

type CartItemProps = {
  item: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ item }) => {
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
