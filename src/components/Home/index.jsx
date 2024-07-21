import { useState, useEffect } from 'react';
import Header from '../Header';
import Category from '../Category';
import FoodItems from '../FoodItems';
import { CartProvider } from '../context/cartContext';
import { NameContext } from '../context/nameContext';
import { useContext } from 'react';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [foodItems, setFoodItems] = useState([]);

  const { setRestaurantName } = useContext(NameContext);

  const fetchRestaurantInfo = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details';
    const options = {
      method: 'GET',
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.log('there was an error while requesting data');
      }
      const data = await response.json();
      console.log(data);
      const restaurantInfo = data[0];
      // console.log(restaurantInfo);
      const menuList = restaurantInfo.table_menu_list.map(
        (menu_list) => menu_list.menu_category
      );
      setCategory(menuList);
      setSelectedCategory(menuList[0]);
      setFoodItems(restaurantInfo.table_menu_list);
      setIsLoading(false);
      setRestaurantName(restaurantInfo.branch_name);
    } catch (error) {
      console.log('HomeAPI: ' + error);
    }
  };

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  const onClickCategory = (selected) => {
    setSelectedCategory(selected);
  };

  return (
    <CartProvider>
      <div>
        <Header />
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
