import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleQuantityChange = (itemId, newName, newPrice, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId
          ? { ...item, name: newName, price: newPrice, quantity: newQuantity }
          : item
      )
    );
  };

  const addToCart = (item) => {
    //TODO: implement logic for adding an item to cart
    console.log('added to cart') + item;
  };

  const removeFromCart = (itemid) => {
    //TODO: implement logic for removing an item from cart
    console.log('reomved from cart' + itemid);
  };

  return (
    <CartContext.Provider
      value={{ cart, handleQuantityChange, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
