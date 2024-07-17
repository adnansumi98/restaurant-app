import { useState } from "react";
import { useCart } from "../context/cartContext";

const Quantity = (props) => {
  const { foodItem } = props;
  const name = foodItem.dish_name;
  const price = foodItem.dish_price;
  const id = foodItem.dish_id;

  const [quantity, setQuantity] = useState(0);

  const { handleQuantityChange, cart, addToCart, removeFromCart } = useCart();

  const onClickQuantityChange = (action) => {
    let newQuantity = action === "increase" ? quantity + 1 : quantity - 1;

    if (newQuantity < 0) newQuantity = 0;
    if (newQuantity > 20) newQuantity = 20;

    const itemInCart = cart.find((item) => item.id === id);

    if (!itemInCart) {
      addToCart({ id, name, price, quantity });
    } else {
      handleQuantityChange(id, newQuantity);
    }
    // removes the item from cart when Quantity becomes zero
    if (newQuantity === 0) {
      removeFromCart(id);
    }

    setQuantity(newQuantity);
  };

  return (
    <div className="quantity-container">
      <button
        type="button"
        className="quantity-button"
        onClick={() => onClickQuantityChange("decrease")}
      >
        -
      </button>
      <p className="food-quantity">{quantity}</p>
      <button
        className="quantity-button"
        type="button"
        onClick={() => onClickQuantityChange("increase")}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
