import { createContext } from "react";

const cartContext = createContext({
  cartItems: [],
  foodWithQantiy: [],
  addCartItems: () => {},
  setFoodWithQuantity: () => {},
});

export default cartContext;
