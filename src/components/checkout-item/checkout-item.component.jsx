import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <h2 className="name">{name}</h2>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{quantity * price}</span>
      <button className="remove-button" type="button" onClick={deleteTotal}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
