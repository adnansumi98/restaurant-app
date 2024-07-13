/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { FoodTypeButton, FoodTypeContainer } from "./styledComponent";
import "./index.css";

const FoodItems = (props) => {
  const { isLoading, foodItems, selectedCategory } = props;

  const [filteredFoodItems, setfilteredFoodItems] = useState([]);
  const [foodWithQuantity, setFoodWithQuantity] = useState([]);

  useEffect(() => {
    const filtered = foodItems
      .filter((item) => item.menu_category === selectedCategory)
      .map((dish) => dish.category_dishes);
    if (filtered !== undefined) {
      setfilteredFoodItems(filtered[0]);
    }
  }, [selectedCategory, foodItems]);

  useEffect(() => {
    const dishNamesWithQuantity =
      filteredFoodItems !== undefined
        ? filteredFoodItems.map((each) => ({
            name: each.dish_name,
            quantity: 0,
          }))
        : [];
    // console.log(dishNamesWithQuantity
    setFoodWithQuantity(dishNamesWithQuantity);
  }, [filteredFoodItems]);

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
                          const filteredFoodItem = foodWithQuantity
                            .filter((each) => each.name === foodItem.dish_name)
                            .map((each) => ({
                              name: each.name,
                              quantity:
                                each.quantity > 0
                                  ? each.quantity - 1
                                  : each.quantity,
                            }));

                          setFoodWithQuantity(
                            foodWithQuantity.map((each) => {
                              if (each.name === foodItem.dish_name) {
                                return filteredFoodItem[0];
                              } else {
                                return each;
                              }
                            }),
                          );
                        }}
                      >
                        -
                      </button>
                      <p className="food-quantity">
                        {foodWithQuantity !== undefined
                          ? foodWithQuantity
                              .filter(
                                (each) => each.name === foodItem.dish_name,
                              )
                              .map((dish) => dish.quantity)
                          : 0}
                      </p>
                      <button
                        className="quantity-button"
                        type="button"
                        onClick={() => {
                          const filteredFoodItem = foodWithQuantity
                            .filter((each) => each.name === foodItem.dish_name)
                            .map((each) => ({
                              name: each.name,
                              quantity:
                                each.quantity < 20
                                  ? each.quantity + 1
                                  : each.quantity,
                            }));

                          setFoodWithQuantity(
                            foodWithQuantity.map((each) => {
                              if (each.name === foodItem.dish_name) {
                                return filteredFoodItem[0];
                              } else {
                                return each;
                              }
                            }),
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="food-calories">
                    {foodItem.dish_calories + " calories"}
                  </p>
                  <img
                    className="food-images"
                    src={foodItem.dish_image}
                    alt="food-image"
                  />
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default FoodItems;
