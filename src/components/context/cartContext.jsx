import {createContext} from 'react'

const cartContext = createContext({
  cartItems: [],
  addCartItems: () => {},
  availablecartItems: [],
  setAvailablecartItems: () => {},
})

export default cartContext
