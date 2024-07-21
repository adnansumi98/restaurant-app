import './index.css';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import Header from '../Header';
import { CartContext, CartProvider } from '../context/cartContext';
import { useContext } from 'react';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <CartProvider>
      <Header />
      {cart.length === 0 ? <EmptyCart /> : <CartItem cartItems={cart} />}
    </CartProvider>
  );
};

export default Cart;
