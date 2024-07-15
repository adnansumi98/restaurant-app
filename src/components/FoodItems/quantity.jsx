import { useState } from 'react';
import { useCart } from '../context/cartContext';

const Quantity = (props) => {
  const { foodItem } = props;
  const name = foodItem.dish_name;
  const price = foodItem.dish_price;
  const id = foodItem.dish_id;

  const [quantity, setQuantity] = useState(0);

  const onClickQuantityChange = (action) => {
    let newQuantity = action === 'increase' ? quantity + 1 : quantity - 1;

    // Ensure quantity stays within bounds
    if (newQuantity < 0) newQuantity = 0;
    if (newQuantity > 20) newQuantity = 20;

    // Call handleQuantityChange with the updated quantity and other item details
    // handleQuantityChange(foodItem.name, foodItem.price, newQuantity);

    // Update local state for display purposes
    setQuantity(newQuantity);
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
