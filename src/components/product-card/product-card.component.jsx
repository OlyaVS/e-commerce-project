import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
  const { incrementCartItem } = useContext(CartContext);

  const onClickHandler = () => {
    incrementCartItem(product);
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
