import { useState, useEffect } from "react";

import Header from "./components/Header";
import Category from "./components/Category";
import FoodItems from "./components/FoodItems";
import "./index.css";
import { CartProvider } from "./components/context/cartContext";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [foodItems, setFoodItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  const fetchFoodItems = async () => {
    const url =
      "https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details";
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.log("there was an error while requesting data");
      }
      const data = await response.json();
      const restaurantInfo = data[0];
      setRestaurantName(restaurantInfo.restaurant_name);
      const menuList = restaurantInfo.table_menu_list.map(
        (menu_list) => menu_list.menu_category,
      );
      setCategory(menuList);
      setSelectedCategory(menuList[0]);
      setFoodItems(restaurantInfo.table_menu_list);
      setIsLoading(false);
    } catch (error) {
      console.log("HomeAPI: " + error);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const onClickCategory = (selected) => {
    setSelectedCategory(selected);
  };

  return (
    <CartProvider>
      <div>
        <Header restaurantName={restaurantName} />
        <Category
          categories={category}
          setCategoryFunction={onClickCategory}
          selectedCategory={selectedCategory}
        />
        <FoodItems
          foodItems={foodItems}
          isLoading={isLoading}
          selectedCategory={selectedCategory}
        />
      </div>
    </CartProvider>
  );
};

export default Home;
