import { Footer, Name, Price, ProductCardContainer } from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { incrementCartItem } from '../../store/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const onClickHandler = () => {
    dispatch(incrementCartItem(cartItems, product));
  };

  const { name, imageUrl, price } = product;

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="button" onClick={onClickHandler}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
