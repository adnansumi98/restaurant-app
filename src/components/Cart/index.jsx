import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import Header from '../Header';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import Popup from 'reactjs-popup';

import './index.css';
import 'reactjs-popup/dist/index.css';

const Cart = () => {
  const { cart, EmptyCartItem } = useContext(CartContext);

  const removeCartitems = () => {
    EmptyCartItem();
  };

  const renderPopup = () => {
    return (
      <Popup
        closeOnDocumentClick
        trigger={
          <button className="emptycart-item" type="button">
            Remove All
          </button>
        }
        position="left center"
      >
        <div>Are you sure you want to remove all item from cart?</div>
        <button
          type="button"
          className="popup-button"
          onClick={removeCartitems}
        >
          ok
        </button>
        <p>click outside to close</p>
      </Popup>
    );
  };

  return (
    <>
      <Header />

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {renderPopup()}
          <CartItem cartItems={cart} />
        </>
      )}
    </>
  );
};

export default Cart;
