import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const handleQuantityChange = (dishName, quantity) => {
    const index = order.findIndex((item) => item.name === dishName);

    if (index !== -1) {
      const newOrder = [...order];
      newOrder[index].quantity = quantity;
      setOrder(newOrder);
    } else {
      setOrder([...order, { name: dishName, quantity }]);
    }
  };

  const getDishQuantity = (dishName) => {
    const dishIndex = order.findIndex((item) => item.name === dishName);
    if (dishIndex !== -1) {
      return order[dishIndex].quantity;
    }
    return 0; // Return 0 if the dish is not found
  };

  return (
    <CartContext.Provider
      value={{ order, handleQuantityChange, getDishQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
