import { useEffect, useState } from 'react'
import './index.css'

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const fetchFoodItems = async () => {
    const url = 'https://run.mocky.io/v3/2477b10c-ee18-4487-9962-1b3d073432c4'
    const options = {
      method: 'GET',
    }
    await fetch(url, options)
      .then((response) => response.json())
      .then((isLoading) => setIsLoading(true))
      .then((data) => setFoodItems(data))
  }

  useEffect(() => {
    fetchFoodItems()
  }, [])

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < 20) {
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  return (
    <div className="fooditems-container">
      <img className="food-mark" src="" alt="" />
      <div className="food-details-container">
        <h1 className="food-name">{'name'}</h1>
        <p className="food-price">{'price'}</p>
        <p className="food-description">{'description'}</p>
        <div className="quantity-container">
          <button
            type="button"
            className="quantity-button"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <p className="food-quantity">{quantity}</p>
          <button
            className="quantity-button"
            type="button"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>
      <p className="food-calories">{'calories'}</p>
      <img className="food-images" src="" alt="" />
    </div>
  )
}

export default FoodItems
