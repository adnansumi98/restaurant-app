import { useContext, useState } from "react";
import CartContext from "../context/cartContext";

const Quantity = (props) => {
  const { foodItem } = props;
  const name = foodItem.dish_name;

  const { handleQuantityChange } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const onClickQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => (prev < 20 ? prev + 1 : 20));
    } else if (action === "decrease") {
      setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    }
    handleQuantityChange(name, quantity);
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
