import { MdShoppingCart } from 'react-icons/md'
import cartContext from '../context/cartContext'
import './index.css'

const Header = (props) => {
  const { restaurantName } = props
  return (
    <cartContext.Consumer>
      {(value) => {
        const { cartItems } = value

        return (
          <nav className="header-container">
            <h1 className="header-name">{restaurantName}</h1>
            <div className="header-orders-container">
              <p className="header-orders">My Orders</p>
              <MdShoppingCart size="30px" />
              <button className="header-button" type="button">
                {cartItems.length}
              </button>
            </div>
          </nav>
        )
      }}
    </cartContext.Consumer>
  )
}

export default Header
