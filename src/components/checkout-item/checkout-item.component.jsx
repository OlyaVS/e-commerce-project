import { useDispatch, useSelector } from 'react-redux';
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
import {
  decrementCartItem,
  deleteCartItem,
  incrementCartItem,
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, quantity, imageUrl } = item;

  const addItem = () => {
    dispatch(incrementCartItem(cartItems, item));
  };

  const removeItem = () => {
    dispatch(decrementCartItem(cartItems, item));
  };

  const deleteTotal = () => {
    dispatch(deleteCartItem(cartItems, item));
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
