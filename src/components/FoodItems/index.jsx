import { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import './index.css'

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [quantity, setQuantity] = useState(0)

  const fetchFoodItems = async () => {
    const url = 'https://run.mocky.io/v3/2477b10c-ee18-4487-9962-1b3d073432c4'
    const options = {
      method: 'GET',
    }
    await fetch(url, options)
      .then((response) => response.json())
      .then(setIsLoading(true))
      .then((data) => setFoodItems(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchFoodItems()
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container ">
          <ScaleLoader />
        </div>
      ) : (
        <ul className="fooditems-container">
          {foodItems.map((foodItem) => {
            return (
              <li key={foodItem.id}>
                <img
                  className="food-mark"
                  src={foodItem.markImageUrl}
                  alt="mark"
                />
                <div className="food-details-container">
                  <h1 className="food-name">{foodItem.name}</h1>
                  <p className="food-price">{foodItem.price}</p>
                  <p className="food-description">{foodItem.description}</p>
                  <div className="quantity-container">
                    <button
                      type="button"
                      className="quantity-button"
                      onClick={() =>
                        setQuantity((count) => (count > 0 ? count - 1 : count))
                      }
                    >
                      -
                    </button>
                    <p className="food-quantity">{quantity}</p>
                    <button
                      className="quantity-button"
                      type="button"
                      onClick={() =>
                        setQuantity((count) => (count < 20 ? count + 1 : count))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="food-calories">{foodItem.calories}</p>
                <img
                  className="food-images"
                  src={foodItem.imageUrl}
                  alt="food-image"
                />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default FoodItems
