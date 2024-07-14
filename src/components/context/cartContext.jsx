import { createContext } from "react";

const cartContext = createContext({
  cartItems: [],
  foodWithQuantiy: [],
  addCartItems: () => {},
  setFoodWithQuantity: () => {},
});

export default cartContext;
