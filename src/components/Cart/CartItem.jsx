import './CartItem.css';
import { MdOutlineDelete } from 'react-icons/md';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';

const CartItem = (props) => {
  const { cartItems } = props;
  const useCart = useContext(CartContext);
  const { handleQuantityChange, removeFromCart } = useCart();

  const onClickQuantityChange = (action, id, quantity) => {
    let newQuantity = action === 'increase' ? quantity + 1 : quantity - 1;

    if (newQuantity < 0) newQuantity = 0;
    if (newQuantity > 20) newQuantity = 20;

    handleQuantityChange(id, newQuantity);

    // removes the item from cart when Quantity becomes zero
    if (newQuantity === 0) {
      removeFromCart(id);
    }
  };

  return (
    <div className="CartItem-container">
      <ul className="CartItem-list">
        {cartItems.map((each) => (
          <li className="cartitem" key={each.id}>
            <img src="" alt={each.name} className="cartitem-image" />
            <p className="cartitem-name">{each.name}</p>
            <div className="quantity-container">
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
    </div>
  );
};

export default CartItem;
