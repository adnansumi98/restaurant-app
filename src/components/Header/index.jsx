import { MdShoppingCart } from 'react-icons/md';
import './index.css';
import { useCart } from '../context/cartContext';

const Header = (props) => {
  const { restaurantName } = props;
  const { getTotalQuantity } = useCart();

  return (
    <nav className="header-container">
      <h1 className="header-name">{restaurantName}</h1>
      <div className="header-orders-container">
        <p className="header-orders">My Orders</p>
        <MdShoppingCart size="30px" />
        <button className="header-button" type="button">
          {getTotalQuantity()}
        </button>
      </div>
    </nav>
  );
};

export default Header;