import { useState, useEffect } from "react";
import cartContext from "../context/cartContext";

// TODO: Create a qunatity component with react context Api

const Quantity = (props) => {
  const { fooditem } = props;

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

  const contextSetterforCart = () => {
    // TODO: implement context for cart
  };

  return (
    <cartContext.Provider
      value={{
        foodWithQuantiy,
        setFoodWithQuantity: contextSetterforFoodWithQuantity,
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
        <p className="food-quantity">
          {foodWithQuantity !== undefined
            ? foodWithQuantity
                .filter((each) => each.name === foodItem.dish_name)
                .map((dish) => dish.quantity)
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
