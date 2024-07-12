import { useState, useEffect } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { FoodTypeContainer, FoodTypeButton } from './styledComponent'
import './index.css'

const FoodItems = (props) => {
  const { isLoading, foodItems, selectedCategory } = props

  const [filteredFoodItems, setfilteredFoodItems] = useState([])

  useEffect(() => {
    const filtered = foodItems
      .filter((item) => item.menu_category === selectedCategory)
      .map((object) => object.category_dishes)
    
    const quantityWithFilter = filtered[0].map((each) => ({
      ...each,
      quantity: 0,
    }))

    setfilteredFoodItems(quantityWithFilter)
  }, [selectedCategory])

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container ">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
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
                        onClick={() => {
                          const updatedQuantity = filteredFoodItems
                            .filter((each) => each.dish_id === foodItem.dish_id)
                            .map((dish) => {
                              let quantityProp = dish.quantity
                              if (quantityProp > 0) {
                                quantityProp -= 1
                              }
                              return {
                                ...dish,
                                quantity: quantityProp,
                              }
                            })
                          console.log(updatedQuantity)
                          setfilteredFoodItems((prevState) => ({
                            ...prevState,
                            updatedQuantity,
                          }))
                        }}
                      >
                        -
                      </button>
                      <p className="food-quantity">{foodItem.quantity}</p>
                      <button
                        className="quantity-button"
                        type="button"
                        onClick={() => {
                          const updatedQuantity = filteredFoodItems
                            .filter((each) => each.dish_id === foodItem.dish_id)
                            .map((dish) => {
                              let quantityProp = dish.quantity
                              if (quantityProp > 0) {
                                quantityProp -= 1
                              }
                              return {
                                ...dish,
                                quantity: quantityProp,
                              }
                            })
                          setfilteredFoodItems((prevState) => ({
                            ...prevState,
                            updatedQuantity,
                          }))
                        }}
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
