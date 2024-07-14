import { useEffect, useState } from "react";
import cartContext from "../context/cartContext";

// TODO: Create a qunatity component with react context Api

const Quantity = (props) => {
  const { foodItem } = props;

  const [foodWithQuantity, setFoodWithQuantity] = useState([]);

  useEffect(() => {
    setFoodWithQuantity((prevState) => ({
      ...prevState,
      [foodItem.dish_name]: { ...prevState[foodItem.dish_name], quantity: 0 },
    }));
  }, [foodItem]);

  console.log(foodWithQuantity);
  const onClickQantityDecrease = () => {
    const filteredFoodItem = foodWithQuantity
      .filter((each) => each.name === foodItem.dish_name)
      .map((each) => ({
        name: each.name,
        quantity: each.quantity > 0 ? each.quantity - 1 : each.quantity,
      }));

    setFoodWithQuantity(
      foodWithQuantity.map((each) => {
        if (each.name === foodItem.dish_name) {
          return filteredFoodItem[0];
        } else {
          return each;
        }
      }),
    );
  };

  const onClickQantityIncrease = () => {
    const filteredFoodItem = foodWithQuantity
      .filter((each) => each.name === foodItem.dish_name)
      .map((each) => ({
        name: each.name,
        quantity: each.quantity < 20 ? each.quantity + 1 : each.quantity,
      }));

    setFoodWithQuantity(
      foodWithQuantity.map((each) => {
        if (each.name === foodItem.dish_name) {
          return filteredFoodItem[0];
        } else {
          return each;
        }
      }),
    );
  };

  const contextSetterforFoodWithQuantity = () => {
    // TODO: implement context for food with Quantity
  };

  const contextSetterforaddCartItems = () => {
    // TODO: implement context for cart
  };

  return (
    <cartContext.Provider
      value={{
        addCartItems: contextSetterforaddCartItems,
      }}
    >
      <div className="quantity-container">
        <button
          type="button"
          className="quantity-button"
          onClick={onClickQantityDecrease}
        >
          -
        </button>
        <p className="food-quantity" onChange={contextSetterforaddCartItems}>
          {foodWithQuantity.length !== 0 &&
          foodWithQuantity.name === foodItem.dish_name
            ? foodWithQuantity.quantity
            : 0}
        </p>
        <button
          className="quantity-button"
          type="button"
          onClick={onClickQantityIncrease}
        >
          +
        </button>
      </div>
    </cartContext.Provider>
  );
};

export default Quantity;
