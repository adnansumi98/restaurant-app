import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const addToCart = (object) => {
    const newItem = object;
    // console.log(newItem
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const getTotalQuantity = () => {
    return cart.length;
    // return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    //TODO: need to account for addons
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleQuantityChange,
        addToCart,
        removeFromCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
