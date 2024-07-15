/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { FoodTypeButton, FoodTypeContainer } from './styledComponent';
import Customizations from './addons';
import Quantity from './quantity';
import './index.css';

const FoodItems = (props) => {
  const { isLoading, foodItems, selectedCategory } = props;

  const [filteredFoodItems, setfilteredFoodItems] = useState([]);

  useEffect(() => {
    const filtered = foodItems
      .filter((item) => item.menu_category === selectedCategory)
      .map((dish) => dish.category_dishes);
    if (filtered !== undefined) {
      setfilteredFoodItems(filtered[0]);
    }
  }, [selectedCategory, foodItems]);

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
                    <p className="food-price">{'SAR ' + foodItem.dish_price}</p>
                    <p className="food-description">
                      {foodItem.dish_description}
                    </p>
                    <Quantity foodItem={foodItem} />
                    <Customizations addonCat={foodItem.addonCat} />
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
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default FoodItems;
