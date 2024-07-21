import { MdOutlineDelete } from 'react-icons/md';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';

import './CartItem.css';

const CartItem = (props) => {
  const { cartItems } = props;
  const { handleQuantityChange, removeFromCart, getTotalPrice } =
    useContext(CartContext);

  const onClickQuantityChange = (action, id, quantity) => {
    let newQuantity = action === 'increase' ? quantity + 1 : quantity - 1;

    if (newQuantity < 1) newQuantity = 1;
    if (newQuantity > 20) newQuantity = 20;

    handleQuantityChange(id, newQuantity);

    // removes the item from cart when Quantity becomes zero
    if (newQuantity === 0) {
      removeFromCart(id);
    }
  };

  return (
    <div className="cartItem-container">
      <ul className="CartItem-list">
        {cartItems.map((each) => (
          <li className="cartitem" key={each.id}>
            <img src={each.image} alt={each.name} className="cartitem-image" />
            <p className="cartitem-name">{each.name}</p>
            <p className="cartitem-price">
              SAR
              <br /> {each.price.toFixed(2)}
            </p>
            <div className="quantity-container-cart">
              <button
                className="quantity-control"
                type="button"
                onClick={() =>
                  onClickQuantityChange('decrease', each.id, each.quantity)
                }
              >
                -
              </button>
              <p className="quantity">{each.quantity}</p>
              <button
                className="quantity-control"
                type="button"
                onClick={() =>
                  onClickQuantityChange('increase', each.id, each.quantity)
                }
              >
                +
              </button>
            </div>
            <p className="cartitem-price">
              {'Total '}
              <br />
              <span className="cartitem-total ">
                {'SAR ' + (each.price * each.quantity).toFixed(2)}
              </span>
            </p>
            <button
              className="delete-control"
              type="button"
              onClick={() => removeFromCart(each.id)}
            >
              <MdOutlineDelete size={30} />
            </button>
          </li>
        ))}
      </ul>
      <div className="Total-price">
        Total Price <br />
        {'SAR ' + getTotalPrice().toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
