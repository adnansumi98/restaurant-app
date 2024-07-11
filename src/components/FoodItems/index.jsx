import { useState, useEffect } from 'react'
import { ScaleLoader } from 'react-spinners'
import { FoodTypeContainer, FoodTypeButton } from './styledComponent'
import './index.css'

const FoodItems = (props) => {
  const { isLoading, foodItems, selectedCategory } = props

  const [filteredFoodItems, setfilteredFoodItems] = useState([])

  useEffect(() => {
    const filtered = foodItems
      .filter((item) => item.menu_category === selectedCategory)
      .map((object) => object.category_dishes)

    setfilteredFoodItems(filtered[0])
  }, [selectedCategory])

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container ">
          <ScaleLoader />
        </div>
      ) : (
        <ul className="fooditems-container">
          {Array.isArray(filteredFoodItems) &&
            filteredFoodItems.map((foodItem) => {
              return (
                <li key={foodItem.dish_id} className="food-item-container">
                  <FoodTypeContainer
                    type={foodItem.dish_Type}
                    className="foodtype-container"
                  >
                    <FoodTypeButton type={foodItem.dish_Type} />
                  </FoodTypeContainer>
                  <div className="food-details-container">
                    <h1 className="food-name">{foodItem.dish_name}</h1>
                    <p className="food-price">{foodItem.dish_price}</p>
                    <p className="food-description">
                      {foodItem.dish_description}
                    </p>
                    <div className="quantity-container">
                      <button
                        type="button"
                        className="quantity-button"
                        onClick={(event) => {
                          console.log(event.target.value)
                          setQuantity((count) =>
                            count > 0 ? count - 1 : count
                          )
                        }}
                      >
                        -
                      </button>
                      <p className="food-quantity">{foodItem.quantity}</p>
                      <button
                        className="quantity-button"
                        type="button"
                        onClick={() =>
                          setQuantity((count) =>
                            count < 20 ? count + 1 : count
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="food-calories">
                    {foodItem.dish_calories + ' calories'}
                  </p>
                  <img
                    className="food-images"
                    src={foodItem.dish_image}
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
