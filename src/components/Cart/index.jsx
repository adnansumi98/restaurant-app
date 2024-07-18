import './index.css';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import Header from '../Header';
import { useCart } from '../context/cartContext';
import { CartProvider } from '../context/cartContext';
import { NameProvider } from '../context/nameContext';

const Cart = () => {
  const { cart } = useCart();
  return (
    <NameProvider>
      <CartProvider>
        <Header />
        {cart === undefined ? <EmptyCart /> : <CartItem cartItems={cart} />}
      </CartProvider>
    </NameProvider>
  );
};

export default Cart;
