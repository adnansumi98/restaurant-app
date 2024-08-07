import { useState } from 'react';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';

const Quantity = (props) => {
  const { foodItem } = props;
  const name = foodItem.dish_name;
  const price = foodItem.dish_price;
  const id = foodItem.dish_id;
  const image = foodItem.dish_image;

  const [quantity, setQuantity] = useState(0);

  const { handleQuantityChange, cart, addToCart, removeFromCart } =
    useContext(CartContext);

  const onClickQuantityChange = (action) => {
    let newQuantity = action === 'increase' ? quantity + 1 : quantity - 1;

    if (newQuantity < 0) newQuantity = 0;
    if (newQuantity > 20) newQuantity = 20;

    const itemInCart = cart.find((item) => item.id === id);
    setQuantity(newQuantity);
    if (!itemInCart) {
      addToCart({ id, name, price, quantity: 1, image });
    } else {
      handleQuantityChange(id, newQuantity);
    }
    // removes the item from cart when Quantity becomes zero
    if (newQuantity === 0) {
      removeFromCart(id);
    }
  };

  return (
    <div className="quantity-container">
      <button
        type="button"
        className="quantity-button"
        onClick={() => onClickQuantityChange('decrease')}
      >
        -
      </button>
      <p className="food-quantity">{quantity}</p>
      <button
        className="quantity-button"
        type="button"
        onClick={() => onClickQuantityChange('increase')}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
