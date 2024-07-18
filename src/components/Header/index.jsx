import { MdShoppingCart } from 'react-icons/md';
import { useCart } from '../context/cartContext';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { NameProvider } from '../context/nameContext';
import { useName } from '../context/nameContext';

const Header = () => {
  const { getTotalQuantity } = useCart();
  const { restaurantName } = useName();

  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate('login');
  };
  const onClickRestaurentName = () => navigate('/');
  const onClickCart = () => navigate('/cart');

  return (
    <NameProvider>
      <nav className="header-container">
        <button
          className="header-name-button"
          type="button"
          onClick={onClickRestaurentName}
        >
          <h1 className="header-name">{restaurantName}</h1>
        </button>
        <div className="header-orders-container">
          <button
            type="button"
            onClick={onClickCart}
            className="header-order-button"
          >
            <p className="header-orders">My Orders</p>
            <MdShoppingCart size="30" />
            <p className="header-button" type="button">
              {getTotalQuantity()}
            </p>
          </button>
          <button
            className="logout-button"
            type="button"
            onClick={onClickLogout}
          >
            Log out
          </button>
        </div>
      </nav>
    </NameProvider>
  );
};

export default Header;
