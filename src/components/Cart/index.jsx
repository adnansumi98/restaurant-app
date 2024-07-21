import './index.css';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import Header from '../Header';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <Header />
      {cart.length === 0 ? <EmptyCart /> : <CartItem cartItems={cart} />}
    </>
  );
};

export default Cart;
