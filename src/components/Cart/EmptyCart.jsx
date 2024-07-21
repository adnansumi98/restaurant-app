import { Link } from 'react-router-dom';
import './EmptyCart.css';

const EmptyCart = () => (
  <div className="empty-cart-container">
    <img
      className="empty-cart-image"
      src="../../../public/emptyCart.png"
      alt="Empty Cart"
    />
    <Link to="/">
      <button className="empty-cart-button" type="button">
        Menu
      </button>
    </Link>
  </div>
);

export default EmptyCart;
