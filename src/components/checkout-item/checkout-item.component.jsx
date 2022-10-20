import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Price,
  Quantity,
  RemoveButton,
  Title,
  Value,
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
  const { incrementCartItem, decrementCartItem, deleteCartItem } = useContext(CartContext);
  const { name, price, quantity, imageUrl } = item;

  const addItem = () => {
    incrementCartItem(item);
  };

  const removeItem = () => {
    decrementCartItem(item);
  };

  const deleteTotal = () => {
    deleteCartItem(item);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Title>{name}</Title>
      <Quantity>
        <Arrow onClick={removeItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>
      <Price>{quantity * price}</Price>
      <RemoveButton type="button" onClick={deleteTotal}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
